import { Suspense } from "react";
import { getBeaches } from "@/lib/googlePlaces";
import BeachesListingClient from "./BeachesListingClient";
import DiscoverListingLayoutSkeleton from "@/components/DiscoverListingLayoutSkeleton";

export const metadata = {
  title: "Beaches | Discover Yogyakarta",
  description:
    "Explore Yogyakarta's stunning south coast beaches — Parangtritis, Indrayanti, Timang, and hidden gems.",
};

async function BeachesFetcher() {
  const beaches = await getBeaches();
  return <BeachesListingClient beaches={beaches} />;
}

export default function BeachesPage() {
  return (
    <Suspense fallback={<DiscoverListingLayoutSkeleton />}>
      <BeachesFetcher />
    </Suspense>
  );
}
