import { Suspense } from "react";
import PlaceDetailLayout, {
  type PlaceItem,
  type CategoryMeta,
} from "@/components/PlaceDetailLayout";
import {
  getTrekkingAndHiking,
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
  backLabel: "All Trekking & Hiking",
  backHref: "/discover/trekking-and-hiking",
  otherTitle: "Other Trails",
  otherDescription:
    "More breathtaking trekking spots and hiking trails around Yogyakarta — from volcanic summits to hidden waterfalls and lush jungle paths.",
  ctaLabel: "Trekking & Hiking",
  basePath: "/discover/trekking-and-hiking",
  singularLabel: "Trail",
  reviewsHeading: "What Hikers Say",
  reviewsNoun: "trail",
};

/* ─── Async data-fetching component ─────────────────────────── */
async function TrekkingDetailFetcher({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const places = await getTrekkingAndHiking();
  const allItems = places.map(toPlaceItem);
  const item = allItems.find((i) => slugify(i.name) === slug) ?? null;
  return <PlaceDetailLayout item={item} allItems={allItems} category={category} />;
}

/* ─── Page shell — renders immediately on navigation ─────────── */
export default function TrekkingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<PlaceDetailLayoutSkeleton />}>
      <TrekkingDetailFetcher params={params} />
    </Suspense>
  );
}
