import CategoryPage from "@/components/CategoryPage";
import { activitiesItems } from "@/data/categoryData";

export const metadata = {
  title: "Activities | Discover Yogyakarta",
  description: "Explore exciting activities in Yogyakarta — batik workshops, temple tours, cave adventures and more.",
};

export default function ActivitiesPage() {
  return <CategoryPage title="Activities" items={activitiesItems} />;
}
