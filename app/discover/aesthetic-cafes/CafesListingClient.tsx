"use client";

import { CafePlace } from "@/lib/googlePlaces";
import DiscoverListingLayout, {
  ListingItem,
} from "@/app/components/DiscoverListingLayout";

interface CafesListingClientProps {
  cafes: CafePlace[];
}

export default function CafesListingClient({ cafes }: CafesListingClientProps) {
  // Map CafePlace fields to the normalised ListingItem shape
  const items: ListingItem[] = cafes.map((cafe) => ({
    id: cafe.placeId,
    name: cafe.name,
    street: cafe.street,
    fullAddress: cafe.fullAddress,
    categories: cafe.categories || null,
    averageRating: cafe.averageRating,
    reviewCount: cafe.reviewCount,
    priceLevel: cafe.priceLevel,
    mainImage: cafe.mainImage,
  }));

  return (
    <DiscoverListingLayout
      title="Aesthetic Cafes"
      subtitle="Yogyakarta's most charming coffee spaces — from leafy hideaways to rooftop views."
      basePath="/discover/aesthetic-cafes"
      emptyNoun="cafes"
      items={items}
    />
  );
}
