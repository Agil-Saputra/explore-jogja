"use client";

import DiscoverListingLayout, {
  ListingItem,
} from "@/app/components/DiscoverListingLayout";

interface Cafe {
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
  MainImage: string;
  AdditionalImages: string[];
  "Place Id": string;
  "Top 5 Reviews": { name: string; review: string }[];
  description: string;
}

interface CafesListingClientProps {
  cafes: Cafe[];
}

export default function CafesListingClient({ cafes }: CafesListingClientProps) {
  // Map cafe-specific fields to the normalised ListingItem shape
  const items: ListingItem[] = cafes.map((cafe) => ({
    id: cafe.description || cafe.Name,
    name: cafe.Name,
    street: cafe.Street,
    fullAddress: cafe.Fulladdress,
    categories: cafe.Categories,
    averageRating: cafe["Average Rating"],
    mainImage: cafe.MainImage,
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
