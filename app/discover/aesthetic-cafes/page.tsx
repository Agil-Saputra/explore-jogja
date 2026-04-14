import cafesData from "@/data/cafes.js";
import CafesListingClient from "./CafesListingClient";

export const metadata = {
  title: "Aesthetic Cafes | Discover Yogyakarta",
  description:
    "Visit Yogyakarta's most Instagram-worthy cafes — specialty coffee, rooftop views, and cozy vibes.",
};

export default function AestheticCafesPage() {
  return <CafesListingClient cafes={cafesData} />;
}
