import beachesData from "@/data/beaches.js";
import BeachesListingClient from "./BeachesListingClient";

export const metadata = {
  title: "Beaches | Discover Yogyakarta",
  description:
    "Explore Yogyakarta's stunning south coast beaches — Parangtritis, Indrayanti, Timang, and hidden gems.",
};

export default function BeachesPage() {
  return <BeachesListingClient beaches={beachesData} />;
}
