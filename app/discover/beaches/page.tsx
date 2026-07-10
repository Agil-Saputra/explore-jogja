import { getBeaches } from "@/lib/googlePlaces";
import BeachesListingClient from "./BeachesListingClient";

export const metadata = {
  title: "Beaches | Discover Yogyakarta",
  description:
    "Explore Yogyakarta's stunning south coast beaches — Parangtritis, Indrayanti, Timang, and hidden gems.",
};

export default async function BeachesPage() {
  const beaches = await getBeaches();
  return <BeachesListingClient beaches={beaches} />;
}
