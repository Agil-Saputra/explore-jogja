import CategoryPage from "@/components/CategoryPage";
import { accommodationItems } from "@/data/categoryData";

export const metadata = {
  title: "Accommodation | Discover Yogyakarta",
  description: "Find the best places to stay in Yogyakarta — from boutique hotels to luxury resorts near Borobudur.",
};

export default function AccommodationPage() {
  return <CategoryPage title="Accommodation" items={accommodationItems} />;
}
