import CategoryPage from "@/components/CategoryPage";
import { trekkingAndHikingItems } from "@/data/categoryData";

export const metadata = {
  title: "Trekking & Hiking | Discover Yogyakarta",
  description: "Hike through Yogyakarta's best trails — Mount Merapi, Kalibiru, waterfalls, and ancient volcano treks.",
};

export default function TrekkingAndHikingPage() {
  return <CategoryPage title="Trekking and Hiking" items={trekkingAndHikingItems} />;
}
