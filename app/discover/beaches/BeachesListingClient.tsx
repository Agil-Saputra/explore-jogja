"use client";

import { PlaceResult } from "@/lib/googlePlaces";
import DiscoverListingLayout, {
  ListingItem,
} from "@/app/components/DiscoverListingLayout";

interface BeachesListingClientProps {
  beaches: PlaceResult[];
}

export default function BeachesListingClient({
  beaches,
}: BeachesListingClientProps) {
  const items: ListingItem[] = beaches.map((beach) => ({
    id: beach.placeId,
    name: beach.name,
    street: beach.street,
    fullAddress: beach.fullAddress,
    categories: beach.categories || null,
    averageRating: beach.averageRating,
    reviewCount: beach.reviewCount,
    priceLevel: beach.priceLevel,
    mainImage: beach.mainImage,
  }));

  return (
    <DiscoverListingLayout
      title="Beaches"
      subtitle="Yogyakarta's stunning south coast beaches — from the mythic Parangtritis to hidden gems along Gunungkidul's limestone cliffs."
      basePath="/discover/beaches"
      emptyNoun="beaches"
      items={items}
    />
  );
}
