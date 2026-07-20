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
  getTopAttractions,
} from "@/lib/googlePlaces";
import {
  staticCafes,
  staticAccommodations,
  staticBeaches,
  staticFoodAndDrink,
  staticTrekking,
  staticTopAttractions,
  type StaticPlace,
} from "@/lib/staticData";
import MapsClient, { MapFeature } from "./MapsClient";
import MapsLoadingSkeleton from "./loading";


const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80";

// ─── Async data-fetching component ──────────────────────────────────────────
// Suspended by the <Suspense> boundary below; renders only after all fetches
// resolve. The parent page shell is sent to the browser immediately.
async function MapsFetcher() {
  const [cafes, accommodations, beaches, foodDrink, trekking, topAttractions] =
    await Promise.allSettled([
      getAestheticCafes(),
      getAccommodations(),
      getBeaches(),
      getFoodAndDrink(),
      getTrekkingAndHiking(),
      getTopAttractions(),
    ]);

  function settled(result: PromiseSettledResult<StaticPlace[]>, fallback: StaticPlace[]): StaticPlace[] {
    const data = result.status === "fulfilled" ? result.value : [];
    return data.length > 0 ? data : fallback;
  }

  const buildFeatures = (
    places: StaticPlace[],
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
    ...buildFeatures(settled(cafes, staticCafes), "Cafe"),
    ...buildFeatures(settled(accommodations, staticAccommodations), "Accommodation"),
    ...buildFeatures(settled(beaches, staticBeaches), "Beach"),
    ...buildFeatures(settled(foodDrink, staticFoodAndDrink), "Restaurant"),
    ...buildFeatures(settled(trekking, staticTrekking), "Trekking"),
    ...buildFeatures(settled(topAttractions, staticTopAttractions), "Wisata"),
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
