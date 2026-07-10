import { getAccommodations } from "@/lib/googlePlaces";
import AccommodationListingClient from "./AccommodationListingClient";

export const metadata = {
  title: "Accommodation | Discover Yogyakarta",
  description:
    "Find the best places to stay in Yogyakarta — from boutique hotels to luxury resorts near Borobudur.",
};

export default async function AccommodationPage() {
  const accommodations = await getAccommodations();
  return <AccommodationListingClient accommodations={accommodations} />;
}
