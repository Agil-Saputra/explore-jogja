import { getTrekkingAndHiking } from "@/lib/googlePlaces";
import TrekkingListingClient from "./TrekkingListingClient";

export const metadata = {
  title: "Trekking & Hiking | Discover Yogyakarta",
  description:
    "Hike through Yogyakarta's best trails — Mount Merapi, Kalibiru, waterfalls, and ancient volcano treks.",
};

export default async function TrekkingAndHikingPage() {
  const places = await getTrekkingAndHiking();
  return <TrekkingListingClient places={places} />;
}
