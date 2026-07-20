import { Suspense } from "react";
import { getAestheticCafes, CafePlace } from "@/lib/googlePlaces";
import CafesListingClient from "./CafesListingClient";
import DiscoverListingLayoutSkeleton from "@/components/DiscoverListingLayoutSkeleton";
// cafes.js uses module.exports — resolved via CJS interop
import staticCafes from "@/data/cafes";

export const metadata = {
  title: "Aesthetic Cafes | Discover Yogyakarta",
  description:
    "Visit Yogyakarta's most Instagram-worthy cafes — specialty coffee, rooftop views, and cozy vibes.",
};

// Map the static JS data shape → CafePlace
// Note: cafes.js uses MainImage / AdditionalImages (no spaces, unlike other data files)
function mapStaticData(raw: (typeof staticCafes)[number]): CafePlace {
  return {
    placeId: raw["Place Id"] ?? "",
    name: raw.Name,
    fullAddress: raw.Fulladdress,
    street: raw.Street,
    categories: raw.Categories ?? "",
    phone: raw.Phone ?? null,
    reviewCount: raw["Review Count"] ?? null,
    averageRating: String(raw["Average Rating"]).replace(",", "."),
    priceLevel: null,
    googleMapsUrl: raw["Google Maps URL"] ?? "",
    latitude: raw.Latitude,
    longitude: raw.Longitude,
    website: raw.Website ?? null,
    mainImage: raw.MainImage ?? "",
    additionalImages: raw.AdditionalImages ?? [],
    reviews: (raw["Top 5 Reviews"] ?? []).map((r) => ({
      name: r.name,
      review: r.review,
    })),
    description: raw.description ?? "",
  };
}

async function AestheticCafesFetcher() {
  let cafes: CafePlace[];

  try {
    cafes = await getAestheticCafes();
    if (!cafes || cafes.length === 0) {
      throw new Error("No results from Google Places API");
    }
  } catch {
    cafes = (staticCafes as typeof staticCafes).map(mapStaticData);
  }

  return <CafesListingClient cafes={cafes} />;
}

export default function AestheticCafesPage() {
  return (
    <Suspense fallback={<DiscoverListingLayoutSkeleton />}>
      <AestheticCafesFetcher />
    </Suspense>
  );
}
