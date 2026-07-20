import { Suspense } from "react";
import PlaceDetailLayout, {
  type PlaceItem,
  type CategoryMeta,
} from "@/components/PlaceDetailLayout";
import {
  getAccommodations,
  slugify,
  type PlaceResult,
} from "@/lib/googlePlaces";
import PlaceDetailLayoutSkeleton from "@/components/PlaceDetailLayoutSkeleton";
import staticAccommodations from "@/data/accomodation";

/* ─── Static data mapper → PlaceResult ──────────────────────── */
function mapStatic(
  raw: (typeof staticAccommodations)[number]
): PlaceResult {
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
  backLabel: "All Accommodation",
  backHref: "/discover/accommodation",
  otherTitle: "Other Places to Stay",
  otherDescription:
    "More great accommodations to explore in Yogyakarta — from boutique hotels to cozy guesthouses near the city\u2019s top attractions.",
  ctaLabel: "Accommodation",
  basePath: "/discover/accommodation",
  singularLabel: "Accommodation",
  reviewsHeading: "What Guests Say",
  reviewsNoun: "accommodation",
};

/* ─── Async data-fetching component ─────────────────────────── */
async function AccommodationDetailFetcher({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let places: PlaceResult[];
  try {
    places = await getAccommodations();
    if (!places || places.length === 0) throw new Error("Empty API response");
  } catch {
    places = staticAccommodations.map(mapStatic);
  }

  const allItems = places.map(toPlaceItem);
  const item = allItems.find((i) => slugify(i.name) === slug) ?? null;
  return <PlaceDetailLayout item={item} allItems={allItems} category={category} />;
}

/* ─── Page shell — renders immediately on navigation ─────────── */
export default function AccommodationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<PlaceDetailLayoutSkeleton />}>
      <AccommodationDetailFetcher params={params} />
    </Suspense>
  );
}
