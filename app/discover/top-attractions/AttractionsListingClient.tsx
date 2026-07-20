"use client";

import { PlaceResult } from "@/lib/googlePlaces";
import DiscoverListingLayout, {
  ListingItem,
} from "@/app/components/DiscoverListingLayout";

interface AttractionsListingClientProps {
  attractions: PlaceResult[];
}

export default function AttractionsListingClient({
  attractions,
}: AttractionsListingClientProps) {
  const items: ListingItem[] = attractions.map((attraction) => ({
    id: attraction.placeId,
    name: attraction.name,
    street: attraction.street,
    fullAddress: attraction.fullAddress,
    categories: attraction.categories || null,
    averageRating: attraction.averageRating,
    reviewCount: attraction.reviewCount,
    priceLevel: attraction.priceLevel,
    mainImage: attraction.mainImage,
  }));

  return (
    <DiscoverListingLayout
      title="Top Attractions"
      subtitle="Yogyakarta's most iconic destinations — from the ancient temples of Borobudur and Prambanan to the grandeur of Kraton and beyond."
      basePath="/discover/top-attractions"
      emptyNoun="attractions"
      items={items}
    />
  );
}
