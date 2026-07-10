/**
 * app/maps/page.tsx — Server Component
 *
 * Fetches all place categories from the Google Places API in parallel,
 * normalises them into GeoJSON-style features, and passes the data to
 * the MapsClient client component for rendering.
 */

import {
  getAestheticCafes,
  getAccommodations,
  getBeaches,
  getFoodAndDrink,
  getTrekkingAndHiking,
} from "@/lib/googlePlaces";
import MapsClient, { MapFeature } from "./MapsClient";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80";

export default async function MapsPage() {
  // Fetch all categories in parallel – server-side, so API key stays secret
  const [cafes, accommodations, beaches, foodDrink, trekking] =
    await Promise.allSettled([
      getAestheticCafes(),
      getAccommodations(),
      getBeaches(),
      getFoodAndDrink(),
      getTrekkingAndHiking(),
    ]);

  // Helper to safely unwrap a settled promise
  function settled<T>(result: PromiseSettledResult<T[]>): T[] {
    return result.status === "fulfilled" ? result.value : [];
  }

  // Map each category's results into the shared MapFeature shape
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
