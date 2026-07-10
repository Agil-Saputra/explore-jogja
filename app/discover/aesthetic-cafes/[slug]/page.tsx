import { getAestheticCafes, slugify, CafePlace } from "@/lib/googlePlaces";
import PlaceDetailLayout, {
  type PlaceItem,
  type CategoryMeta,
} from "@/components/PlaceDetailLayout";

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

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function CafeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cafes = await getAestheticCafes();
  const allItems = cafes.map(toPlaceItem);
  const item = allItems.find((i) => slugify(i.name) === slug) ?? null;

  return (
    <PlaceDetailLayout item={item} allItems={allItems} category={category} />
  );
}
