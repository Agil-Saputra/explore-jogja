"use client";

import DiscoverListingLayout, {
  ListingItem,
} from "@/app/components/DiscoverListingLayout";

interface Accommodation {
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

interface AccommodationListingClientProps {
  accommodations: Accommodation[];
}

export default function AccommodationListingClient({
  accommodations,
}: AccommodationListingClientProps) {
  const items: ListingItem[] = accommodations.map((acc) => ({
    id: acc["Place Id"] || acc.Name,
    name: acc.Name,
    street: acc.Street,
    fullAddress: acc.Fulladdress,
    categories: acc.Categories,
    averageRating: acc["Average Rating"],
    mainImage: acc["Main Image"],
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
