"use client";

import DiscoverListingLayout, {
  ListingItem,
} from "@/app/components/DiscoverListingLayout";

interface Restaurant {
  Name: string;
  Fulladdress: string;
  Street: string;
  Categories: string | null;
  Phone: string | null;
  "Review Count": number | null;
  "Average Rating": string;
  "Google Maps URL": string;
  Latitude: number;
  Longitude: number;
  Website: string | null;
  "Main Image": string;
  "Additional Images": string[];
  "Place Id": string;
  "Top 5 Reviews": { name: string; review: string }[];
  description: string;
}

interface FoodDrinkListingClientProps {
  restaurants: Restaurant[];
}

export default function FoodDrinkListingClient({
  restaurants,
}: FoodDrinkListingClientProps) {
  const items: ListingItem[] = restaurants.map((r) => ({
    id: r["Place Id"] || r.Name,
    name: r.Name,
    street: r.Street,
    fullAddress: r.Fulladdress,
    categories: r.Categories,
    averageRating: r["Average Rating"],
    mainImage: r["Main Image"],
  }));

  return (
    <DiscoverListingLayout
      title="Food &amp; Drink"
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
