import { Suspense } from "react";
import { getAccommodations } from "@/lib/googlePlaces";
import AccommodationListingClient from "./AccommodationListingClient";
import DiscoverListingLayoutSkeleton from "@/components/DiscoverListingLayoutSkeleton";

export const metadata = {
  title: "Accommodation | Discover Yogyakarta",
  description:
    "Find the best places to stay in Yogyakarta — from boutique hotels to luxury resorts near Borobudur.",
};

async function AccommodationFetcher() {
  const accommodations = await getAccommodations();
  return <AccommodationListingClient accommodations={accommodations} />;
}

export default function AccommodationPage() {
  return (
    <Suspense fallback={<DiscoverListingLayoutSkeleton />}>
      <AccommodationFetcher />
    </Suspense>
  );
}
