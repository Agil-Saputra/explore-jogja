import { Suspense } from "react";
import { getFoodAndDrink } from "@/lib/googlePlaces";
import FoodDrinkListingClient from "./FoodDrinkListingClient";
import DiscoverListingLayoutSkeleton from "@/components/DiscoverListingLayoutSkeleton";

export const metadata = {
  title: "Food & Drink | Discover Yogyakarta",
  description:
    "Taste the best of Yogyakarta — gudeg, sate klathak, bakpia, angkringan and traditional Javanese cuisine.",
};

async function FoodAndDrinkFetcher() {
  const restaurants = await getFoodAndDrink();
  return <FoodDrinkListingClient restaurants={restaurants} />;
}

export default function FoodAndDrinkPage() {
  return (
    <Suspense fallback={<DiscoverListingLayoutSkeleton />}>
      <FoodAndDrinkFetcher />
    </Suspense>
  );
}
