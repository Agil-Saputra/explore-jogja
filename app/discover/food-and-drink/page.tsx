import CategoryPage from "@/components/CategoryPage";
import { foodAndDrinkItems } from "@/data/categoryData";

export const metadata = {
  title: "Food & Drink | Discover Yogyakarta",
  description: "Taste the best of Yogyakarta — gudeg, sate klathak, bakpia, angkringan and traditional Javanese cuisine.",
};

export default function FoodAndDrinkPage() {
  return <CategoryPage title="Food & Drink" items={foodAndDrinkItems} />;
}
