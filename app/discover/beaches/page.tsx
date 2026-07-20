import { Suspense } from "react";
import { getBeaches, PlaceResult } from "@/lib/googlePlaces";
import BeachesListingClient from "./BeachesListingClient";
import DiscoverListingLayoutSkeleton from "@/components/DiscoverListingLayoutSkeleton";
import staticBeaches from "@/data/beaches";

export const metadata = {
  title: "Beaches | Discover Yogyakarta",
  description:
    "Explore Yogyakarta's stunning south coast beaches — Parangtritis, Indrayanti, Timang, and hidden gems.",
};

// Map the static JS data shape → PlaceResult (CafePlace)
function mapStaticData(raw: (typeof staticBeaches)[number]): PlaceResult {
  return {
    placeId: raw["Place Id"] ?? "",
    name: raw.Name,
    fullAddress: raw.Fulladdress,
    street: raw.Street,
    categories: raw.Categories ?? "",
    phone: raw.Phone ?? null,
    reviewCount: raw["Review Count"] ?? null,
    averageRating: String(raw["Average Rating"]).replace(",", "."),
    priceLevel: null,
    googleMapsUrl: raw["Google Maps URL"] ?? "",
    latitude: raw.Latitude,
    longitude: raw.Longitude,
    website: raw.Website ?? null,
    mainImage: raw["Main Image"] ?? "",
    additionalImages: raw["Additional Images"] ?? [],
    reviews: (raw["Top 5 Reviews"] ?? []).map((r) => ({
      name: r.name,
      review: r.review,
    })),
    description: raw.description ?? "",
  };
}

async function BeachesFetcher() {
  let beaches: PlaceResult[];

  try {
    beaches = await getBeaches();
    if (!beaches || beaches.length === 0) {
      throw new Error("No results from Google Places API");
    }
  } catch {
    beaches = staticBeaches.map(mapStaticData);
  }

  return <BeachesListingClient beaches={beaches} />;
}

export default function BeachesPage() {
  return (
    <Suspense fallback={<DiscoverListingLayoutSkeleton />}>
      <BeachesFetcher />
    </Suspense>
  );
}
