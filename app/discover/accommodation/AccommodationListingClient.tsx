"use client";

import { PlaceResult } from "@/lib/googlePlaces";
import DiscoverListingLayout, {
  ListingItem,
} from "@/app/components/DiscoverListingLayout";

interface AccommodationListingClientProps {
  accommodations: PlaceResult[];
}

export default function AccommodationListingClient({
  accommodations,
}: AccommodationListingClientProps) {
  const items: ListingItem[] = accommodations.map((acc) => ({
    id: acc.placeId,
    name: acc.name,
    street: acc.street,
    fullAddress: acc.fullAddress,
    categories: acc.categories || null,
    averageRating: acc.averageRating,
    mainImage: acc.mainImage,
  }));

  return (
    <DiscoverListingLayout
      title="Accommodation"
      subtitle="Find the best places to stay in Yogyakarta — from boutique hotels to luxury resorts and cozy homestays."
      basePath="/discover/accommodation"
      emptyNoun="accommodation"
      items={items}
      renderCardFooter={(item) => (
        <div className="flex flex-col gap-2">
          {item.street && item.street !== item.fullAddress && (
            <p className="text-white/70 text-[11px] font-medium leading-snug line-clamp-1">
              {item.street}
            </p>
          )}
        </div>
      )}
    />
  );
}
