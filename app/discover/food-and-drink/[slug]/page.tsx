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

/* ─── Normaliser ─────────────────────────────────────────────── */
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
  const places = await getFoodAndDrink();
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
