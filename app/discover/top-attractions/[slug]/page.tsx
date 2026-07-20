import { Suspense } from "react";
import PlaceDetailLayout, {
  type PlaceItem,
  type CategoryMeta,
} from "@/components/PlaceDetailLayout";
import {
  getTopAttractions,
  slugify,
  type PlaceResult,
} from "@/lib/googlePlaces";
import PlaceDetailLayoutSkeleton from "@/components/PlaceDetailLayoutSkeleton";
import topAttractionsData from "@/data/topAttractions";

/* ─── Static data mapper → PlaceResult ──────────────────────── */
function mapStatic(
  raw: (typeof topAttractionsData)[number]
): PlaceResult {
  return {
    placeId: raw["Place Id"] ?? "",
    name: raw.Name,
    fullAddress: raw.Fulladdress,
    street: raw.Street,
    categories: raw.Categories ?? "",
    phone: raw.Phone ?? null,
    reviewCount: raw["Review Count"] ?? null,
    averageRating: raw["Average Rating"]
      ? String(raw["Average Rating"]).replace(",", ".")
      : "N/A",
    priceLevel: null,
    googleMapsUrl: raw["Google Maps URL"] ?? "",
    latitude: raw.Latitude,
    longitude: raw.Longitude,
    website: raw.Website ?? null,
    mainImage: raw["Main Image"] ?? "",
    additionalImages: raw["Additional Images"] ?? [],
    reviews: (raw["Top 5 Reviews"] ?? []).map((r) => ({
      name: r.name,
      review: r.review,
    })),
    description: raw.Name,
  };
}

/* ─── Normaliser: PlaceResult → PlaceItem ────────────────────── */
function toPlaceItem(p: PlaceResult): PlaceItem {
  return {
    name: p.name,
    fullAddress: p.fullAddress,
    street: p.street,
    categories: p.categories || null,
    phone: p.phone,
    reviewCount: p.reviewCount,
    averageRating: p.averageRating,
    googleMapsUrl: p.googleMapsUrl,
    website: p.website,
    mainImage: p.mainImage,
    additionalImages: p.additionalImages ?? [],
    placeId: p.placeId,
    reviews: p.reviews ?? [],
    description: p.description,
  };
}

/* ─── Category metadata ──────────────────────────────────────── */
const category: CategoryMeta = {
  backLabel: "All Top Attractions",
  backHref: "/discover/top-attractions",
  otherTitle: "Other Attractions",
  otherDescription:
    "More iconic destinations across Yogyakarta — from ancient temples and royal palaces to natural wonders and cultural landmarks.",
  ctaLabel: "Top Attractions",
  basePath: "/discover/top-attractions",
  singularLabel: "Attraction",
  reviewsHeading: "What Visitors Say",
  reviewsNoun: "attraction",
};

/* ─── Async data-fetching component ─────────────────────────── */
async function AttractionDetailFetcher({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let places: PlaceResult[];
  try {
    places = await getTopAttractions();
    if (!places || places.length === 0) throw new Error("Empty API response");
  } catch {
    places = topAttractionsData.map(mapStatic);
  }

  const allItems = places.map(toPlaceItem);
  const item = allItems.find((i) => slugify(i.name) === slug) ?? null;
  return <PlaceDetailLayout item={item} allItems={allItems} category={category} />;
}

/* ─── Page shell ─────────────────────────────────────────────── */
export default function AttractionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<PlaceDetailLayoutSkeleton />}>
      <AttractionDetailFetcher params={params} />
    </Suspense>
  );
}
