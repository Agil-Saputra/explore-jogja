import CategoryPage from "@/components/CategoryPage";
import { topAttractionsItems } from "@/data/categoryData";

export const metadata = {
  title: "Top Attractions | Discover Yogyakarta",
  description: "Visit Yogyakarta's top attractions — Borobudur, Prambanan, Kraton, and more UNESCO heritage sites.",
};

export default function TopAttractionsPage() {
  return <CategoryPage title="Top Attractions" items={topAttractionsItems} />;
}
