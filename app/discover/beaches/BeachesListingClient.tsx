"use client";

import DiscoverListingLayout, {
  ListingItem,
} from "@/app/components/DiscoverListingLayout";

interface Beach {
  Name: string;
  Fulladdress: string;
  Street: string;
  Categories: string;
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

interface BeachesListingClientProps {
  beaches: Beach[];
}

export default function BeachesListingClient({
  beaches,
}: BeachesListingClientProps) {
  const items: ListingItem[] = beaches.map((beach) => ({
    id: beach["Place Id"] || beach.Name,
    name: beach.Name,
    street: beach.Street,
    fullAddress: beach.Fulladdress,
    categories: beach.Categories,
    averageRating: beach["Average Rating"],
    mainImage: beach["Main Image"],
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
