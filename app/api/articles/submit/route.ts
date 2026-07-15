import { NextRequest, NextResponse } from "next/server";

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const CMA_TOKEN = process.env.CONTENTFUL_CMA_TOKEN!;
const CMA_BASE = `https://api.contentful.com/spaces/${SPACE_ID}/environments/master`;
const UPLOAD_BASE = `https://upload.contentful.com/spaces/${SPACE_ID}/uploads`;

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

async function uploadImageAsset(
  fileBuffer: ArrayBuffer,
  fileName: string,
  contentType: string
): Promise<{ assetId: string; assetVersion: number } | null> {
  const uploadRes = await fetch(UPLOAD_BASE, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${CMA_TOKEN}`,
      "Content-Type": "application/octet-stream",
    },
    body: fileBuffer,
  });
  if (!uploadRes.ok) return null;
  const upload = await uploadRes.json();
  const uploadId: string = upload.sys.id;

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
  if (!createAssetRes.ok) return null;
  const asset = await createAssetRes.json();
  const assetId: string = asset.sys.id;
  const assetVersion: number = asset.sys.version;

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
  if (!processRes.ok) return null;

  return { assetId, assetVersion: assetVersion + 1 };
}

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

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const title = (formData.get("title") as string | null)?.trim() ?? "";
    const content = (formData.get("content") as string | null)?.trim() ?? "";
    const author = (formData.get("author") as string | null)?.trim() ?? "";
    const email = (formData.get("email") as string | null)?.trim() ?? "";
    const imageFile = formData.get("image") as File | null;

    if (!title || !content || !author || !email || !imageFile) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .slice(0, 100);

    let bannerAssetId: string | null = null;
    if (imageFile && imageFile.size > 0) {
      const fileBuffer = await imageFile.arrayBuffer();
      const result = await uploadImageAsset(
        fileBuffer,
        imageFile.name,
        imageFile.type || "image/jpeg"
      );
      if (result) {
        await waitForAssetProcessing(result.assetId);
        bannerAssetId = result.assetId;
      }
    }

    if (!bannerAssetId) {
       return NextResponse.json(
        { error: "Image upload failed." },
        { status: 500 }
      );
    }

    const fields: Record<string, unknown> = {
      title: { "en-US": title },
      content: { "en-US": toRichText(content) },
      author: { "en-US": author },
      email: { "en-US": email },
      slug: { "en-US": slug },
      bannerImage: {
        "en-US": {
          sys: { type: "Link", linkType: "Asset", id: bannerAssetId },
        },
      },
    };

    const createRes = await fetch(`${CMA_BASE}/entries`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CMA_TOKEN}`,
        "Content-Type": "application/vnd.contentful.management.v1+json",
        "X-Contentful-Content-Type": "blogPost",
      },
      body: JSON.stringify({ fields }),
    });

    if (!createRes.ok) {
      const errBody = await createRes.text();
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
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
