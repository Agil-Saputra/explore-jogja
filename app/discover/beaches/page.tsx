import CategoryPage from "@/components/CategoryPage";
import { beachesItems } from "@/data/categoryData";

export const metadata = {
  title: "Beaches | Discover Yogyakarta",
  description: "Explore Yogyakarta's stunning south coast beaches — Parangtritis, Indrayanti, Timang, and hidden gems.",
};

export default function BeachesPage() {
  return <CategoryPage title="Beaches" items={beachesItems} />;
}
