import { Suspense } from "react";
import { getAestheticCafes, slugify, CafePlace } from "@/lib/googlePlaces";
import PlaceDetailLayout, {
  type PlaceItem,
  type CategoryMeta,
} from "@/components/PlaceDetailLayout";
import PlaceDetailLayoutSkeleton from "@/components/PlaceDetailLayoutSkeleton";
// cafes.js uses module.exports — resolved via CJS interop
import staticCafes from "@/data/cafes";

// ─── Static data mapper → CafePlace ──────────────────────────────────────────
// Note: cafes.js uses MainImage / AdditionalImages (no spaces, unlike other files)
function mapStatic(raw: (typeof staticCafes)[number]): CafePlace {
  return {
    placeId: raw["Place Id"] ?? "",
    name: raw.Name,
    fullAddress: raw.Fulladdress,
    street: raw.Street,
    categories: raw.Categories ?? "",
    phone: raw.Phone ?? null,
    reviewCount: raw["Review Count"] ?? null,
    averageRating: String(raw["Average Rating"]).replace(",", "."),
    priceLevel: null,
    googleMapsUrl: raw["Google Maps URL"] ?? "",
    latitude: raw.Latitude,
    longitude: raw.Longitude,
    website: raw.Website ?? null,
    mainImage: raw["Main Image"] ?? "",
    additionalImages: raw["Additional Images"] ?? [],
    reviews: ((raw["Top 5 Reviews"] as any[]) ?? []).map((r) => ({
      name: r.name,
      review: r.review,
    })),
    description: (raw as any).description ?? "",
  };
}

// ─── Normaliser: CafePlace → PlaceItem ───────────────────────────────────────
function toPlaceItem(c: CafePlace): PlaceItem {
  return {
    name: c.name,
    fullAddress: c.fullAddress,
    street: c.street,
    categories: c.categories,
    phone: c.phone,
    reviewCount: c.reviewCount,
    averageRating: c.averageRating,
    googleMapsUrl: c.googleMapsUrl,
    website: c.website,
    mainImage: c.mainImage,
    additionalImages: c.additionalImages ?? [],
    placeId: c.placeId,
    reviews: c.reviews ?? [],
    description: c.description,
  };
}

// ─── Category metadata ────────────────────────────────────────────────────────
const category: CategoryMeta = {
  backLabel: "All Aesthetic Cafes",
  backHref: "/discover/aesthetic-cafes",
  otherTitle: "Other Cafes",
  otherDescription:
    "Yogyakarta offers diverse aesthetic cafes for every taste — from cozy neighborhood spots to stylish modern lounges and creative spaces set near the city\u2019s cultural highlights.",
  ctaLabel: "Aesthetic Cafes",
  basePath: "/discover/aesthetic-cafes",
  singularLabel: "Cafe",
  reviewsHeading: "What Visitors Say",
  reviewsNoun: "cafe",
};

// ─── Async data-fetching component ───────────────────────────────────────────
async function CafeDetailFetcher({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let cafes: CafePlace[];
  try {
    cafes = await getAestheticCafes();
    if (!cafes || cafes.length === 0) throw new Error("Empty API response");
  } catch {
    cafes = staticCafes.map(mapStatic);
  }

  const allItems = cafes.map(toPlaceItem);
  const item = allItems.find((i) => slugify(i.name) === slug) ?? null;
  return <PlaceDetailLayout item={item} allItems={allItems} category={category} />;
}

// ─── Page shell — renders immediately on navigation ──────────────────────────
export default function CafeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<PlaceDetailLayoutSkeleton />}>
      <CafeDetailFetcher params={params} />
    </Suspense>
  );
}
