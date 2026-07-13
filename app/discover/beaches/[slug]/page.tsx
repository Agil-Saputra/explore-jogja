import { Suspense } from "react";
import PlaceDetailLayout, {
  type PlaceItem,
  type CategoryMeta,
} from "@/components/PlaceDetailLayout";
import {
  getBeaches,
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
  backLabel: "All Beaches",
  backHref: "/discover/beaches",
  otherTitle: "Other Beaches",
  otherDescription:
    "More stunning shores to explore in Yogyakarta — from hidden coves to dramatic clifftop views along the southern coast.",
  ctaLabel: "Beaches",
  basePath: "/discover/beaches",
  singularLabel: "Beach",
  reviewsHeading: "What Visitors Say",
  reviewsNoun: "beach",
};

/* ─── Async data-fetching component ─────────────────────────── */
async function BeachDetailFetcher({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const places = await getBeaches();
  const allItems = places.map(toPlaceItem);
  const item = allItems.find((i) => slugify(i.name) === slug) ?? null;
  return <PlaceDetailLayout item={item} allItems={allItems} category={category} />;
}

/* ─── Page shell — renders immediately on navigation ─────────── */
export default function BeachDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<PlaceDetailLayoutSkeleton />}>
      <BeachDetailFetcher params={params} />
    </Suspense>
  );
}
