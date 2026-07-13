import { Suspense } from "react";
import { getTrekkingAndHiking } from "@/lib/googlePlaces";
import TrekkingListingClient from "./TrekkingListingClient";
import DiscoverListingLayoutSkeleton from "@/components/DiscoverListingLayoutSkeleton";

export const metadata = {
  title: "Trekking & Hiking | Discover Yogyakarta",
  description:
    "Hike through Yogyakarta's best trails — Mount Merapi, Kalibiru, waterfalls, and ancient volcano treks.",
};

async function TrekkingFetcher() {
  const places = await getTrekkingAndHiking();
  return <TrekkingListingClient places={places} />;
}

export default function TrekkingAndHikingPage() {
  return (
    <Suspense fallback={<DiscoverListingLayoutSkeleton />}>
      <TrekkingFetcher />
    </Suspense>
  );
}
