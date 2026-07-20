import { Suspense } from "react";
import PlaceDetailLayout, {
  type PlaceItem,
  type CategoryMeta,
} from "@/components/PlaceDetailLayout";
import {
  getFoodAndDrink,
  slugify,
  type PlaceResult,
} from "@/lib/googlePlaces";
import PlaceDetailLayoutSkeleton from "@/components/PlaceDetailLayoutSkeleton";
import staticRestaurants from "@/data/foodAndDrink";

/* ─── Static data mapper → PlaceResult ──────────────────────── */
function mapStatic(raw: (typeof staticRestaurants)[number]): PlaceResult {
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
    reviews: (raw["Top 5 Reviews"] ?? []).map((r) => ({
      name: r.name,
      review: r.review,
    })),
    description: raw.description ?? "",
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
  backLabel: "All Food & Drink",
  backHref: "/discover/food-and-drink",
  otherTitle: "Other Places to Eat",
  otherDescription:
    "More great restaurants to explore in Yogyakarta — from traditional Javanese cuisine to modern fusion dining and street food gems.",
  ctaLabel: "Food & Drink",
  basePath: "/discover/food-and-drink",
  singularLabel: "Restaurant",
  reviewsHeading: "What Diners Say",
  reviewsNoun: "restaurant",
};

/* ─── Async data-fetching component ─────────────────────────── */
async function FoodDrinkDetailFetcher({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let places: PlaceResult[];
  try {
    places = await getFoodAndDrink();
    if (!places || places.length === 0) throw new Error("Empty API response");
  } catch {
    places = staticRestaurants.map(mapStatic);
  }

  const allItems = places.map(toPlaceItem);
  const item = allItems.find((i) => slugify(i.name) === slug) ?? null;
  return <PlaceDetailLayout item={item} allItems={allItems} category={category} />;
}

/* ─── Page shell — renders immediately on navigation ─────────── */
export default function FoodAndDrinkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<PlaceDetailLayoutSkeleton />}>
      <FoodDrinkDetailFetcher params={params} />
    </Suspense>
  );
}
