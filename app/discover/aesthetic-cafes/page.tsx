import { Suspense } from "react";
import { getAestheticCafes } from "@/lib/googlePlaces";
import CafesListingClient from "./CafesListingClient";
import DiscoverListingLayoutSkeleton from "@/components/DiscoverListingLayoutSkeleton";

export const metadata = {
  title: "Aesthetic Cafes | Discover Yogyakarta",
  description:
    "Visit Yogyakarta's most Instagram-worthy cafes — specialty coffee, rooftop views, and cozy vibes.",
};

async function AestheticCafesFetcher() {
  const cafes = await getAestheticCafes();
  return <CafesListingClient cafes={cafes} />;
}

export default function AestheticCafesPage() {
  return (
    <Suspense fallback={<DiscoverListingLayoutSkeleton />}>
      <AestheticCafesFetcher />
    </Suspense>
  );
}
