import { NextRequest, NextResponse } from "next/server";

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const CMA_TOKEN = process.env.CONTENTFUL_CMA_TOKEN!;
const CMA_BASE = `https://api.contentful.com/spaces/${SPACE_ID}/environments/master`;
const UPLOAD_BASE = `https://upload.contentful.com/spaces/${SPACE_ID}/uploads`;

// ── Helper: poll asset until file URL is ready ────────────────────────────────
async function waitForAssetProcessing(assetId: string): Promise<string | null> {
  for (let i = 0; i < 10; i++) {
    await new Promise((r) => setTimeout(r, 1500));
    const res = await fetch(`${CMA_BASE}/assets/${assetId}`, {
      headers: { Authorization: `Bearer ${CMA_TOKEN}` },
    });
    if (!res.ok) return null;
    const asset = await res.json();
    const url = asset?.fields?.file?.["en-US"]?.url as string | undefined;
    if (url) return url.startsWith("//") ? `https:${url}` : url;
  }
  return null;
}

// ── Step 1–3: Upload file binary → create asset → process asset ──────────────
async function uploadImageAsset(
  fileBuffer: ArrayBuffer,
  fileName: string,
  contentType: string
): Promise<{ assetId: string; assetVersion: number } | null> {
  // Step 1: Upload binary
  const uploadRes = await fetch(UPLOAD_BASE, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${CMA_TOKEN}`,
      "Content-Type": "application/octet-stream",
    },
    body: fileBuffer,
  });
  if (!uploadRes.ok) {
    console.error("Upload failed", await uploadRes.text());
    return null;
  }
  const upload = await uploadRes.json();
  const uploadId: string = upload.sys.id;

  // Step 2: Create asset
  const createAssetRes = await fetch(`${CMA_BASE}/assets`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${CMA_TOKEN}`,
      "Content-Type": "application/vnd.contentful.management.v1+json",
    },
    body: JSON.stringify({
      fields: {
        title: { "en-US": fileName },
        file: {
          "en-US": {
            contentType,
            fileName,
            uploadFrom: {
              sys: { type: "Link", linkType: "Upload", id: uploadId },
            },
          },
        },
      },
    }),
  });
  if (!createAssetRes.ok) {
    console.error("Create asset failed", await createAssetRes.text());
    return null;
  }
  const asset = await createAssetRes.json();
  const assetId: string = asset.sys.id;
  const assetVersion: number = asset.sys.version;

  // Step 3: Process asset
  const processRes = await fetch(
    `${CMA_BASE}/assets/${assetId}/files/en-US/process`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${CMA_TOKEN}`,
        "X-Contentful-Version": String(assetVersion),
      },
    }
  );
  if (!processRes.ok) {
    console.error("Process asset failed", await processRes.text());
    return null;
  }

  return { assetId, assetVersion: assetVersion + 1 };
}

// ── Build rich-text document from plain text ──────────────────────────────────
function toRichText(text: string) {
  return {
    nodeType: "document",
    data: {},
    content: [
      {
        nodeType: "paragraph",
        data: {},
        content: [
          { nodeType: "text", value: text, marks: [], data: {} },
        ],
      },
    ],
  };
}

// ── POST /api/events/submit ───────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const titleEn = (formData.get("titleEn") as string | null)?.trim() ?? "";
    const descriptionEn = (formData.get("descriptionEn") as string | null)?.trim() ?? "";
    const host = (formData.get("host") as string | null)?.trim() ?? "";
    const startDate = (formData.get("startDate") as string | null)?.trim() ?? "";
    const endDate = (formData.get("endDate") as string | null)?.trim() ?? "";
    const location = (formData.get("location") as string | null)?.trim() ?? "";
    const contactName = (formData.get("contactName") as string | null)?.trim() ?? "";
    const contactPhone = (formData.get("contactPhone") as string | null)?.trim() ?? "";
    const imageFile = formData.get("image") as File | null;

    // Basic validation
    if (!titleEn || !startDate || !location || !contactName) {
      return NextResponse.json(
        { error: "Missing required fields: title, startDate, location, contactName" },
        { status: 400 }
      );
    }

    // Auto-generate slug from English title
    const slug = titleEn
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .slice(0, 100);

    // ── Handle image upload ───────────────────────────────────────────────────
    let bannerAssetId: string | null = null;
    if (imageFile && imageFile.size > 0) {
      const fileBuffer = await imageFile.arrayBuffer();
      const result = await uploadImageAsset(
        fileBuffer,
        imageFile.name,
        imageFile.type || "image/jpeg"
      );
      if (result) {
        // Wait for processing before linking
        await waitForAssetProcessing(result.assetId);
        bannerAssetId = result.assetId;
      }
    }

    // ── Build entry fields ────────────────────────────────────────────────────
    const fields: Record<string, unknown> = {
      title: { "en-US": titleEn },
      description: { "en-US": toRichText(descriptionEn) },
      host: { "en-US": host },
      startDate: { "en-US": startDate },
      location: { "en-US": location },
      contactName: { "en-US": contactName },
      contactPhoneNumber: { "en-US": contactPhone },
      slug: { "en-US": slug },
    };

    if (endDate) {
      fields.endDate = { "en-US": endDate };
    }

    if (bannerAssetId) {
      fields.eventImage = {
        "en-US": {
          sys: { type: "Link", linkType: "Asset", id: bannerAssetId },
        },
      };
    }

    // ── Create the entry ──────────────────────────────────────────────────────
    const createRes = await fetch(`${CMA_BASE}/entries`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CMA_TOKEN}`,
        "Content-Type": "application/vnd.contentful.management.v1+json",
        "X-Contentful-Content-Type": "event",
      },
      body: JSON.stringify({ fields }),
    });

    if (!createRes.ok) {
      const errBody = await createRes.text();
      console.error("Create entry failed", errBody);
      return NextResponse.json(
        { error: "Failed to create entry in Contentful", details: errBody },
        { status: 502 }
      );
    }

    const entry = await createRes.json();

    return NextResponse.json({
      success: true,
      entryId: entry.sys.id,
      slug,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("Event submit error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
