import { NextRequest, NextResponse } from "next/server";
import { getArticles } from "@/lib/contentful";

/**
 * GET /api/articles?locale=id-ID
 *
 * Returns all Contentful blog posts, optionally in the requested locale.
 * Contentful locale codes: "en-US" (default), "id-ID" (Indonesian).
 * If the space does not have localization enabled the locale param is ignored
 * and English content is returned — no error is thrown.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const locale = searchParams.get("locale") ?? undefined;

  try {
    const articles = await getArticles(locale);
    return NextResponse.json(articles);
  } catch (err) {
    console.error("[/api/articles] Contentful fetch error:", err);
    // Fallback: return English articles if the locale is not supported
    try {
      const articles = await getArticles();
      return NextResponse.json(articles);
    } catch {
      return NextResponse.json(
        { error: "Failed to fetch articles" },
        { status: 500 }
      );
    }
  }
}
