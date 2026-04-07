import CategoryPage from "@/components/CategoryPage";
import { gettingAroundItems } from "@/data/categoryData";

export const metadata = {
  title: "Getting Around | Discover Yogyakarta",
  description: "Navigate Yogyakarta with ease — buses, becak, andong, motorbike rentals, and ride-hailing services.",
};

export default function GettingAroundPage() {
  return <CategoryPage title="Getting Around" items={gettingAroundItems} />;
}
