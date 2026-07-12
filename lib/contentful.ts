import { createClient, EntryFieldTypes, Asset } from "contentful";

// ── Contentful client ────────────────────────────────────────────────────────
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY!,
});

// ── Content type definition ──────────────────────────────────────────────────
export interface BlogPostSkeleton {
  contentTypeId: "blogPost";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    bannerImage: EntryFieldTypes.AssetLink;
    content: EntryFieldTypes.RichText;
  };
}

export interface EventSkeleton {
  contentTypeId: "event";
  fields: {
    title: EntryFieldTypes.Text;
    startDate: EntryFieldTypes.Date;
    endDate: EntryFieldTypes.Date;
    location: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    image: EntryFieldTypes.AssetLink;
    link: EntryFieldTypes.Text;
  };
}

// ── Resolved article type used across the app ────────────────────────────────
export interface ContentfulArticle {
  id: string;
  title: string;
  slug: string;
  bannerImageUrl: string | null;
  bannerImageAlt: string | null;
  content: import("@contentful/rich-text-types").Document | null;
}

// ── Resolved event type used across the app ─────────────────────────────────
export interface ContentfulEvent {
  id: string;
  title: string;
  startDate: string; // ISO date string
  endDate: string | null;
  location: string;
  description: import("@contentful/rich-text-types").Document | null;
  imageUrl: string | null;
  imageAlt: string | null;
  link: string | null;
}

// ── Helper: extract image URL from an asset field ───────────────────────────
function resolveImageUrl(asset: unknown): string | null {
  if (!asset) return null;
  const a = asset as Asset;
  const url = a.fields?.file?.url as string | undefined;
  if (!url) return null;
  return url.startsWith("//") ? `https:${url}` : url;
}

function resolveImageAlt(asset: unknown): string | null {
  if (!asset) return null;
  const a = asset as Asset;
  return (a.fields?.title as string) ?? (a.fields?.description as string) ?? null;
}

// ── Fetch all blog posts (for the listing page) ──────────────────────────────
export async function getArticles(): Promise<ContentfulArticle[]> {
  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    order: ["-sys.createdAt"],
  });
  console.log(entries)
  return entries.items.map((entry) => ({
    id: entry.sys.id,
    title: entry.fields.title as string,
    slug: entry.fields.slug as string,
    bannerImageUrl: resolveImageUrl(entry.fields.bannerImage),
    bannerImageAlt: resolveImageAlt(entry.fields.bannerImage),
    content: null, // not needed for listing
  }));

}

// ── Fetch a single blog post by slug (for the detail page) ──────────────────
export async function getArticleBySlug(
  slug: string
): Promise<ContentfulArticle | null> {
  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  });

  const entry = entries.items[0];
  if (!entry) return null;

  return {
    id: entry.sys.id,
    title: entry.fields.title as string,
    slug: entry.fields.slug as string,
    bannerImageUrl: resolveImageUrl(entry.fields.bannerImage),
    bannerImageAlt: resolveImageAlt(entry.fields.bannerImage),
    content: entry.fields.content as import("@contentful/rich-text-types").Document ?? null,
  };
}

// ── Fetch all slugs (for generateStaticParams) ───────────────────────────────
export async function getAllSlugs(): Promise<string[]> {
  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    select: ["fields.slug"],
  });

  return entries.items.map((entry) => entry.fields.slug as string);
}

// ── Fetch a single event by ID (for the event detail page) ──────────────────
export async function getEventById(
  id: string
): Promise<ContentfulEvent | null> {
  try {
    const entry = await client.getEntry<EventSkeleton>(id);
    if (!entry) return null;

    return {
      id: entry.sys.id,
      title: entry.fields.title as string,
      startDate: entry.fields.startDate as string,
      endDate: (entry.fields.endDate as string) ?? null,
      location: entry.fields.location as string,
      description: (entry.fields.description as import("@contentful/rich-text-types").Document) ?? null,
      imageUrl: resolveImageUrl(entry.fields.image),
      imageAlt: resolveImageAlt(entry.fields.image),
      link: (entry.fields.link as string) ?? null,
    };
  } catch {
    return null;
  }
}

// ── Fetch all events (for the events listing page) ───────────────────────────
export async function getEvents(): Promise<ContentfulEvent[]> {
  const entries = await client.getEntries<EventSkeleton>({
    content_type: "event",
    order: ["fields.startDate"],
  });

  return entries.items.map((entry) => ({
    id: entry.sys.id,
    title: entry.fields.title as string,
    startDate: entry.fields.startDate as string,
    endDate: (entry.fields.endDate as string) ?? null,
    location: entry.fields.location as string,
    description: (entry.fields.description as import("@contentful/rich-text-types").Document) ?? null,
    imageUrl: resolveImageUrl(entry.fields.image),
    imageAlt: resolveImageAlt(entry.fields.image),
    link: (entry.fields.link as string) ?? null,
  }));
}
