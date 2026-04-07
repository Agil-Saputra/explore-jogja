import CategoryPage from "@/components/CategoryPage";
import { eventsItems } from "@/data/categoryData";

export const metadata = {
  title: "Events | Discover Yogyakarta",
  description: "Discover cultural events in Yogyakarta — festivals, ceremonies, art exhibitions, and performances.",
};

export default function EventsPage() {
  return <CategoryPage title="Events" items={eventsItems} />;
}
