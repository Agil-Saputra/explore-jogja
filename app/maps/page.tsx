/**
 * app/maps/page.tsx — Server Component
 *
 * Navigates to /maps immediately, then streams in map data via Suspense.
 * MapsFetcher is the async node that awaits the Google Places API;
 * the page shell (MapsSkeleton) is sent to the browser right away.
 */

import { Suspense } from "react";
import {
  getAestheticCafes,
  getAccommodations,
  getBeaches,
  getFoodAndDrink,
  getTrekkingAndHiking,
} from "@/lib/googlePlaces";
import MapsClient, { MapFeature } from "./MapsClient";
import MapsLoadingSkeleton from "./loading";  


const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80";

// ─── Async data-fetching component ──────────────────────────────────────────
// Suspended by the <Suspense> boundary below; renders only after all fetches
// resolve. The parent page shell is sent to the browser immediately.
async function MapsFetcher() {
  const [cafes, accommodations, beaches, foodDrink, trekking] =
    await Promise.allSettled([
      getAestheticCafes(),
      getAccommodations(),
      getBeaches(),
      getFoodAndDrink(),
      getTrekkingAndHiking(),
    ]);

  function settled<T>(result: PromiseSettledResult<T[]>): T[] {
    return result.status === "fulfilled" ? result.value : [];
  }

  const buildFeatures = (
    places: Awaited<ReturnType<typeof getAestheticCafes>>,
    featureType: string,
  ): MapFeature[] =>
    places
      .filter((p) => p.latitude && p.longitude)
      .map((p, i) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [p.longitude, p.latitude],
        },
        properties: {
          id: i,
          name: p.name,
          type: featureType,
          image: p.mainImage || FALLBACK_IMAGE,
          category: p.categories || "",
          rating: p.averageRating || "N/A",
          address: p.fullAddress || "",
          phone: p.phone || "",
          website: p.website || "",
        },
      }));

  const features: MapFeature[] = [
    ...buildFeatures(settled(cafes), "Cafe"),
    ...buildFeatures(settled(accommodations), "Accommodation"),
    ...buildFeatures(settled(beaches), "Beach"),
    ...buildFeatures(settled(foodDrink), "Restaurant"),
    ...buildFeatures(settled(trekking), "Trekking"),
  ];

  return <MapsClient features={features} />;
}

// ─── Page shell — renders immediately on navigation ──────────────────────────
export default function MapsPage() {
  return (
    <Suspense fallback={<MapsLoadingSkeleton />}>
      <MapsFetcher />
    </Suspense>
  );
}
