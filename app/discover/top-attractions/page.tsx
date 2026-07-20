import { Suspense } from "react";
import { getTopAttractions } from "@/lib/googlePlaces";
import AttractionsListingClient from "./AttractionsListingClient";
import DiscoverListingLayoutSkeleton from "@/components/DiscoverListingLayoutSkeleton";

export const metadata = {
  title: "Top Attractions | Discover Yogyakarta",
  description:
    "Visit Yogyakarta's top attractions — Borobudur, Prambanan, Kraton, and more UNESCO heritage sites.",
};

async function AttractionsFetcher() {
  const attractions = await getTopAttractions();
  return <AttractionsListingClient attractions={attractions} />;
}

export default function TopAttractionsPage() {
  return (
    <Suspense fallback={<DiscoverListingLayoutSkeleton />}>
      <AttractionsFetcher />
    </Suspense>
  );
}
