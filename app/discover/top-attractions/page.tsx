import { Suspense } from "react";
import { getTopAttractions } from "@/lib/googlePlaces";
import AttractionsListingClient from "./AttractionsListingClient";
import DiscoverListingLayoutSkeleton from "@/components/DiscoverListingLayoutSkeleton";
import topAttractionsData from "@/data/topAttractions";

export const metadata = {
  title: "Top Attractions | Discover Yogyakarta",
  description:
    "Visit Yogyakarta's top attractions — Borobudur, Prambanan, Kraton, and more UNESCO heritage sites.",
};

async function AttractionsFetcher() {
  let attractions = await getTopAttractions();

  if (!attractions || attractions.length === 0) {
    attractions = topAttractionsData.map((item: {
      "Place Id": string;
      Name: string;
      Street: string;
      Fulladdress: string;
      Categories: string;
      "Average Rating": number | null;
      "Review Count": number | null;
      "Main Image": string;
      Phone?: string | null;
      "Google Maps Url"?: string;
      Latitude?: number;
      Longitude?: number;
      Website?: string | null;
      "Additional Images"?: string[];
      Reviews?: { name: string; review: string }[];
      Description?: string;
    }) => ({
      placeId: item["Place Id"],
      name: item["Name"],
      street: item["Street"],
      fullAddress: item["Fulladdress"],
      categories: item["Categories"] ?? "",
      averageRating: item["Average Rating"] != null ? String(item["Average Rating"]) : "",
      reviewCount: item["Review Count"],
      priceLevel: null,
      mainImage: item["Main Image"],
      phone: item["Phone"] ?? null,
      googleMapsUrl: item["Google Maps Url"] ?? "",
      latitude: item["Latitude"] ?? 0,
      longitude: item["Longitude"] ?? 0,
      website: item["Website"] ?? null,
      additionalImages: item["Additional Images"] ?? [],
      reviews: item["Reviews"] ?? [],
      description: item["Description"] ?? "",
    }));
  }

  return <AttractionsListingClient attractions={attractions} />;
}

export default function TopAttractionsPage() {
  return (
    <Suspense fallback={<DiscoverListingLayoutSkeleton />}>
      <AttractionsFetcher />
    </Suspense>
  );
}
