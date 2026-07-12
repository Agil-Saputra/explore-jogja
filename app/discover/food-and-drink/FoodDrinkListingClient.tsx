"use client";

import { PlaceResult } from "@/lib/googlePlaces";
import DiscoverListingLayout, {
  ListingItem,
} from "@/app/components/DiscoverListingLayout";

interface FoodDrinkListingClientProps {
  restaurants: PlaceResult[];
}

export default function FoodDrinkListingClient({
  restaurants,
}: FoodDrinkListingClientProps) {
  const items: ListingItem[] = restaurants.map((r) => ({
    id: r.placeId,
    name: r.name,
    street: r.street,
    fullAddress: r.fullAddress,
    categories: r.categories || null,
    averageRating: r.averageRating,
    reviewCount: r.reviewCount,
    priceLevel: r.priceLevel,
    mainImage: r.mainImage,
  }));

  return (
    <DiscoverListingLayout
      title="Food & Drink"
      subtitle="Taste the best of Yogyakarta — gudeg, sate klathak, bakpia, angkringan and traditional Javanese cuisine."
      basePath="/discover/food-and-drink"
      emptyNoun="restaurants"
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
