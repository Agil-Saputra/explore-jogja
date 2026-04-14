import accommodations from "@/data/accomodation.js";
import AccommodationListingClient from "./AccommodationListingClient";

export const metadata = {
  title: "Accommodation | Discover Yogyakarta",
  description:
    "Find the best places to stay in Yogyakarta — from boutique hotels to luxury resorts near Borobudur.",
};

export default function AccommodationPage() {
  return <AccommodationListingClient accommodations={accommodations} />;
}
