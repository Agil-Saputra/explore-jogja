/**
 * lib/staticData.ts
 *
 * Normalizes local JS data files into the same camelCase shape returned by the
 * Google Places API functions (getAestheticCafes, getAccommodations, etc.).
 * Used as a per-category fallback in app/maps/page.tsx when the API is down.
 */

import rawAccommodations from "@/data/accomodation.js";
import rawBeaches from "@/data/beaches.js";
import rawCafes from "@/data/cafes.js";
import rawFood from "@/data/foodAndDrink.js";
import rawTrekking from "@/data/trekking.js";
import rawTopAttractions from "@/data/topAttractions.js";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80";

/** Shape that buildFeatures() in page.tsx expects (mirrors Google Places output) */
export interface StaticPlace {
  name: string;
  latitude: number;
  longitude: number;
  mainImage: string;
  categories: string;
  averageRating: string;
  fullAddress: string;
  phone: string;
  website: string;
}

/** Raw local data entries may use either "Main Image" or MainImage */
type RawPlace = {
  Name?: string;
  Latitude?: number;
  Longitude?: number;
  "Main Image"?: string;
  MainImage?: string;
  "Average Rating"?: string;
  Fulladdress?: string;
  Phone?: string | null;
  Website?: string | null;
  Categories?: string | null;
};

/** Ensure protocol-relative URLs (//...) become https:// for next/image compatibility. */
function ensureAbsoluteUrl(url: string): string {
  if (url.startsWith("//")) return `https:${url}`;
  return url;
}

function normalize(places: RawPlace[]): StaticPlace[] {
  return places
    .filter((p) => p.Latitude && p.Longitude)
    .map((p) => ({
      name: p.Name || "",
      latitude: p.Latitude!,
      longitude: p.Longitude!,
      mainImage: ensureAbsoluteUrl(p["Main Image"] || p.MainImage || FALLBACK_IMAGE),
      categories: p.Categories || "",
      // Local data uses comma decimal separator ("4,5") — convert to dot for consistency
      averageRating: (p["Average Rating"] || "N/A").replace(",", "."),
      fullAddress: p.Fulladdress || "",
      phone: p.Phone || "",
      website: p.Website || "",
    }));
}


export const staticAccommodations: StaticPlace[] = normalize(
  rawAccommodations as unknown as RawPlace[],
);
export const staticBeaches: StaticPlace[] = normalize(rawBeaches as unknown as RawPlace[]);
export const staticCafes: StaticPlace[] = normalize(rawCafes as unknown as RawPlace[]);
export const staticFoodAndDrink: StaticPlace[] = normalize(rawFood as unknown as RawPlace[]);
export const staticTrekking: StaticPlace[] = normalize(rawTrekking as unknown as RawPlace[]);
export const staticTopAttractions: StaticPlace[] = normalize(
  rawTopAttractions as unknown as RawPlace[],
);
