import restaurants from "@/data/restaurant.js";
import FoodDrinkListingClient from "./FoodDrinkListingClient";

export const metadata = {
  title: "Food & Drink | Discover Yogyakarta",
  description:
    "Taste the best of Yogyakarta — gudeg, sate klathak, bakpia, angkringan and traditional Javanese cuisine.",
};

export default function FoodAndDrinkPage() {
  return <FoodDrinkListingClient restaurants={restaurants} />;
}
