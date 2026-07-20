import { Suspense } from "react";
import { getAccommodations, PlaceResult } from "@/lib/googlePlaces";
import AccommodationListingClient from "./AccommodationListingClient";
import DiscoverListingLayoutSkeleton from "@/components/DiscoverListingLayoutSkeleton";
import staticAccommodations from "@/data/accomodation";

export const metadata = {
  title: "Accommodation | Discover Yogyakarta",
  description:
    "Find the best places to stay in Yogyakarta — from boutique hotels to luxury resorts near Borobudur.",
};

// Map the static JS data shape → PlaceResult (CafePlace)
function mapStaticData(raw: (typeof staticAccommodations)[number]): PlaceResult {
  return {
    placeId: raw["Place Id"] ?? "",
    name: raw.Name,
    fullAddress: raw.Fulladdress,
    street: raw.Street,
    categories: raw.Categories ?? "",
    phone: raw.Phone ?? null,
    reviewCount: raw["Review Count"] ?? null,
    // Static data uses comma as decimal separator (e.g. "4,4") – normalise to dot
    averageRating: String(raw["Average Rating"]).replace(",", "."),
    priceLevel: null,
    googleMapsUrl: raw["Google Maps URL"] ?? "",
    latitude: raw.Latitude,
    longitude: raw.Longitude,
    website: raw.Website ?? null,
    mainImage: raw["Main Image"] ?? "",
    additionalImages: raw["Additional Images"] ?? [],
    reviews: ((raw["Top 5 Reviews"] as any[]) ?? []).map((r) => ({
      name: r.name,
      review: r.review,
    })),
    description: (raw as any).description ?? "",
  };
}

async function AccommodationFetcher() {
  let accommodations: PlaceResult[];

  try {
    accommodations = await getAccommodations();
    // Treat an empty API response as unavailable and fall back to static data
    if (!accommodations || accommodations.length === 0) {
      throw new Error("No results from Google Places API");
    }
  } catch {
    accommodations = staticAccommodations.map(mapStaticData);
  }

  return <AccommodationListingClient accommodations={accommodations} />;
}

export default function AccommodationPage() {
  return (
    <Suspense fallback={<DiscoverListingLayoutSkeleton />}>
      <AccommodationFetcher />
    </Suspense>
  );
}
