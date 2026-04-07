import CategoryPage from "@/components/CategoryPage";
import { aestheticCafesItems } from "@/data/categoryData";

export const metadata = {
  title: "Aesthetic Cafes | Discover Yogyakarta",
  description: "Visit Yogyakarta's most Instagram-worthy cafes — specialty coffee, rooftop views, and cozy vibes.",
};

export default function AestheticCafesPage() {
  return <CategoryPage title="Aesthetic Cafes" items={aestheticCafesItems} />;
}
