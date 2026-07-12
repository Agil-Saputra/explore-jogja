"use client";

import { PlaceResult } from "@/lib/googlePlaces";
import DiscoverListingLayout, {
  ListingItem,
} from "@/app/components/DiscoverListingLayout";

interface TrekkingListingClientProps {
  places: PlaceResult[];
}

export default function TrekkingListingClient({
  places,
}: TrekkingListingClientProps) {
  const items: ListingItem[] = places.map((place) => ({
    id: place.placeId,
    name: place.name,
    street: place.street,
    fullAddress: place.fullAddress,
    categories: place.categories || null,
    averageRating: place.averageRating,
    reviewCount: place.reviewCount,
    priceLevel: place.priceLevel,
    mainImage: place.mainImage,
  }));

  return (
    <DiscoverListingLayout
      title="Trekking & Hiking"
      subtitle="Hike through Yogyakarta's best trails — Mount Merapi, Kalibiru, waterfalls, and ancient volcano treks."
      basePath="/discover/trekking-and-hiking"
      emptyNoun="trekking spots"
      items={items}
      renderCardFooter={(item) => (
        <div className="flex flex-col gap-2">
          {item.categories && (
            <span className="inline-block w-fit bg-white/15 backdrop-blur-sm text-white/90 text-[10px] font-semibold rounded-full px-2.5 py-0.5 border border-white/10">
              {item.categories}
            </span>
          )}
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
