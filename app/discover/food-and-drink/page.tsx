import { Suspense } from "react";
import { getFoodAndDrink, PlaceResult } from "@/lib/googlePlaces";
import FoodDrinkListingClient from "./FoodDrinkListingClient";
import DiscoverListingLayoutSkeleton from "@/components/DiscoverListingLayoutSkeleton";
import staticRestaurants from "@/data/foodAndDrink";

export const metadata = {
  title: "Food & Drink | Discover Yogyakarta",
  description:
    "Taste the best of Yogyakarta — gudeg, sate klathak, bakpia, angkringan and traditional Javanese cuisine.",
};

// Map the static JS data shape → PlaceResult (CafePlace)
function mapStaticData(raw: (typeof staticRestaurants)[number]): PlaceResult {
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
    reviews: ((raw["Top 5 Reviews"] as any[]) ?? []).map((r) => ({
      name: r.name,
      review: r.review,
    })),
    description: (raw as any).description ?? "",
  };
}

async function FoodAndDrinkFetcher() {
  let restaurants: PlaceResult[];

  try {
    restaurants = await getFoodAndDrink();
    if (!restaurants || restaurants.length === 0) {
      throw new Error("No results from Google Places API");
    }
  } catch {
    restaurants = staticRestaurants.map(mapStaticData);
  }

  return <FoodDrinkListingClient restaurants={restaurants} />;
}

export default function FoodAndDrinkPage() {
  return (
    <Suspense fallback={<DiscoverListingLayoutSkeleton />}>
      <FoodAndDrinkFetcher />
    </Suspense>
  );
}
