import { getAestheticCafes } from "@/lib/googlePlaces";
import CafesListingClient from "./CafesListingClient";

export const metadata = {
  title: "Aesthetic Cafes | Discover Yogyakarta",
  description:
    "Visit Yogyakarta's most Instagram-worthy cafes — specialty coffee, rooftop views, and cozy vibes.",
};

export default async function AestheticCafesPage() {
  const cafes = await getAestheticCafes();
  return <CafesListingClient cafes={cafes} />;
}
