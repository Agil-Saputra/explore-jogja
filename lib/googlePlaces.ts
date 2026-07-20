/**
 * lib/googlePlaces.ts
 * Server-side helper for fetching aesthetic-cafe data from the Google Places API.
 * Uses the (legacy) Places API – Text Search + Place Details.
 */

const API_KEY = process.env.GOOGLE_PLACES_API_KEY!;

// ─── Raw Google Places shapes (subset we actually use) ───────────────────────

interface GPlacePhoto {
  photo_reference: string;
  height: number;
  width: number;
}

interface GPlaceReview {
  author_name: string;
  text: string;
  rating: number;
}

interface GPlaceResult {
  place_id: string;
  name: string;
  formatted_address: string;
  vicinity?: string;
  geometry: { location: { lat: number; lng: number } };
  rating?: number;
  user_ratings_total?: number;
  price_level?: number;
  photos?: GPlacePhoto[];
  types?: string[];
}

interface GPlaceDetails {
  place_id: string;
  name: string;
  formatted_address: string;
  formatted_phone_number?: string;
  website?: string;
  rating?: number;
  user_ratings_total?: number;
  price_level?: number;
  geometry: { location: { lat: number; lng: number } };
  photos?: GPlacePhoto[];
  types?: string[];
  reviews?: GPlaceReview[];
  url?: string;
}

// ─── Normalised shape used by the app ────────────────────────────────────────

export interface CafePlace {
  placeId: string;
  name: string;
  fullAddress: string;
  street: string;
  categories: string;
  phone: string | null;
  reviewCount: number | null;
  averageRating: string;
  /** Google Places price level: 0 = Free, 1 = Inexpensive, 2 = Moderate, 3 = Expensive, 4 = Very Expensive */
  priceLevel: number | null;
  googleMapsUrl: string;
  latitude: number;
  longitude: number;
  website: string | null;
  mainImage: string;
  additionalImages: string[];
  reviews: { name: string; review: string }[];
  description: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Ensure a URL is absolute. Google's APIs can return protocol-relative URLs
 * (e.g. "//lh3.googleusercontent.com/...") which next/image rejects.
 */
function ensureAbsoluteUrl(url: string): string {
  if (url.startsWith("//")) return `https:${url}`;
  return url;
}

/** Build a Places photo URL from a photo_reference. */
function photoUrl(ref: string, maxWidth = 1080): string {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photo_reference=${ref}&key=${API_KEY}`;
}

/** Derive a short street name from the full formatted address. */
function extractStreet(formatted: string): string {
  return formatted.split(",")[0].trim();
}

/** Turn the types array into a comma-separated human label. */
function formatCategories(types: string[]): string {
  const exclude = new Set(["point_of_interest", "establishment", "food"]);
  return types
    .filter((t) => !exclude.has(t))
    .map((t) => t.replace(/_/g, " "))
    .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
    .slice(0, 3)
    .join(", ");
}

// ─── Text Search (with pagination) ───────────────────────────────────────────
// The Places API returns max 20 results per page and supports up to 3 pages
// via next_page_token. We collect pages until we have ≥ maxResults or run out.

async function textSearch(
  query: string,
  maxResults = 60
): Promise<GPlaceResult[]> {
  const baseUrl =
    "https://maps.googleapis.com/maps/api/place/textsearch/json";
  const collected: GPlaceResult[] = [];
  let pageToken: string | undefined;

  for (let page = 0; page < 3; page++) {
    const url = new URL(baseUrl);
    url.searchParams.set("query", query);
    url.searchParams.set("key", API_KEY);
    if (pageToken) url.searchParams.set("pagetoken", pageToken);

    const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Places Text Search failed: ${res.status}`);
    const data = await res.json();

    const results: GPlaceResult[] = data.results ?? [];
    collected.push(...results);

    // Stop early if we have enough or there are no more pages
    if (collected.length >= maxResults || !data.next_page_token) break;

    pageToken = data.next_page_token as string;

    // Google requires a short delay before the next_page_token becomes valid
    await new Promise((r) => setTimeout(r, 2000));
  }

  return collected.slice(0, maxResults);
}

// ─── Place Details ────────────────────────────────────────────────────────────

async function placeDetails(placeId: string): Promise<GPlaceDetails | null> {
  const fields = [
    "place_id",
    "name",
    "formatted_address",
    "formatted_phone_number",
    "website",
    "rating",
    "user_ratings_total",
    "price_level",
    "geometry",
    "photos",
    "types",
    "reviews",
    "url",
  ].join(",");

  const url = new URL(
    "https://maps.googleapis.com/maps/api/place/details/json"
  );
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", fields);
  url.searchParams.set("key", API_KEY);

  const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  const data = await res.json();
  return (data.result ?? null) as GPlaceDetails | null;
}

// ─── Normalise a single raw result ───────────────────────────────────────────

function normaliseCafe(
  raw: GPlaceResult,
  det: GPlaceDetails | null
): CafePlace {
  const src = det ?? raw;
  const photos = src.photos ?? [];
  const mainRef = photos[0]?.photo_reference;
  const additionalRefs = photos.slice(1, 6).map((p) => p.photo_reference);
  const rawReviews: GPlaceReview[] = det?.reviews ?? [];

  return {
    placeId: src.place_id,
    name: src.name,
    fullAddress: src.formatted_address,
    street: extractStreet(src.formatted_address),
    categories: formatCategories(src.types ?? raw.types ?? []),
    phone: det?.formatted_phone_number ?? null,
    reviewCount: src.user_ratings_total ?? null,
    averageRating: src.rating?.toFixed(1) ?? "N/A",
    priceLevel: src.price_level ?? det?.price_level ?? null,
    googleMapsUrl:
      det?.url ??
      `https://www.google.com/maps/place/?q=place_id:${src.place_id}`,
    latitude: src.geometry.location.lat,
    longitude: src.geometry.location.lng,
    website: det?.website ?? null,
    mainImage: mainRef ? ensureAbsoluteUrl(photoUrl(mainRef)) : "",
    additionalImages: additionalRefs.map((ref) => ensureAbsoluteUrl(photoUrl(ref))),
    reviews: rawReviews.slice(0, 5).map((rv) => ({
      name: rv.author_name,
      review: rv.text,
    })),
    description: src.name,
  };
}

// ─── Find Place by name (for itinerary enrichment) ────────────────────────────

/**
 * Given a place name and approximate coordinates, calls the Find Place From Text
 * endpoint and returns up to `maxPhotos` photo URLs.
 * Falls back to an empty array if the place isn't found or the API call fails.
 */
export async function findPlacePhotos(
  name: string,
  lat: number,
  lng: number,
  maxPhotos = 5
): Promise<string[]> {
  try {
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
    );
    url.searchParams.set("input", name);
    url.searchParams.set("inputtype", "textquery");
    url.searchParams.set("fields", "photos,place_id");
    // Bias results toward the given location (5 km radius)
    url.searchParams.set("locationbias", `circle:5000@${lat},${lng}`);
    url.searchParams.set("key", API_KEY);

    const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
    if (!res.ok) return [];

    const data = await res.json();
    const candidate = data.candidates?.[0];
    if (!candidate) return [];

    const photos: { photo_reference: string }[] = candidate.photos ?? [];
    return photos
      .slice(0, maxPhotos)
      .map((p) => ensureAbsoluteUrl(photoUrl(p.photo_reference, 800)));
  } catch {
    return [];
  }
}

// ─── Main exports ────────────────────────────────────────────────────────────

/** Generic alias so other pages can reuse the same normalised shape. */
export type PlaceResult = CafePlace;

export async function getAestheticCafes(): Promise<CafePlace[]> {
  const results = await textSearch("aesthetic cafe Yogyakarta", 50);

  const detailsList = await Promise.all(
    results.map((r) => placeDetails(r.place_id))
  );

  return results.map((raw, i) => normaliseCafe(raw, detailsList[i]));
}

/** Fetch a single cafe by its name-slug for the detail page. */
export async function getCafeBySlug(slug: string): Promise<CafePlace | null> {
  const all = await getAestheticCafes();
  return all.find((c) => slugify(c.name) === slug) ?? null;
}

// ─── Accommodation ───────────────────────────────────────────────────────────

export async function getAccommodations(): Promise<PlaceResult[]> {
  const results = await textSearch("hotel penginapan Yogyakarta", 50);
  const detailsList = await Promise.all(
    results.map((r) => placeDetails(r.place_id))
  );
  return results.map((raw, i) => normaliseCafe(raw, detailsList[i]));
}

export async function getAccommodationBySlug(
  slug: string
): Promise<PlaceResult | null> {
  const all = await getAccommodations();
  return all.find((p) => slugify(p.name) === slug) ?? null;
}

// ─── Beaches ─────────────────────────────────────────────────────────────────

export async function getBeaches(): Promise<PlaceResult[]> {
  const results = await textSearch("pantai wisata Yogyakarta Gunungkidul", 50);
  const detailsList = await Promise.all(
    results.map((r) => placeDetails(r.place_id))
  );
  return results.map((raw, i) => normaliseCafe(raw, detailsList[i]));
}

export async function getBeachBySlug(
  slug: string
): Promise<PlaceResult | null> {
  const all = await getBeaches();
  return all.find((p) => slugify(p.name) === slug) ?? null;
}

// ─── Food & Drink ─────────────────────────────────────────────────────────────

export async function getFoodAndDrink(): Promise<PlaceResult[]> {
  const results = await textSearch(
    "restoran kuliner makanan khas Yogyakarta",
    50
  );
  const detailsList = await Promise.all(
    results.map((r) => placeDetails(r.place_id))
  );
  return results.map((raw, i) => normaliseCafe(raw, detailsList[i]));
}

export async function getFoodBySlug(
  slug: string
): Promise<PlaceResult | null> {
  const all = await getFoodAndDrink();
  return all.find((p) => slugify(p.name) === slug) ?? null;
}

// ─── Trekking & Hiking ────────────────────────────────────────────────────────

export async function getTrekkingAndHiking(): Promise<PlaceResult[]> {
  const results = await textSearch(
    "trekking hiking wisata alam Yogyakarta",
    50
  );
  const detailsList = await Promise.all(
    results.map((r) => placeDetails(r.place_id))
  );
  return results.map((raw, i) => normaliseCafe(raw, detailsList[i]));
}

export async function getTrekkingBySlug(
  slug: string
): Promise<PlaceResult | null> {
  const all = await getTrekkingAndHiking();
  return all.find((p) => slugify(p.name) === slug) ?? null;
}

// ─── Top Attractions ──────────────────────────────────────────────────────────

export async function getTopAttractions(): Promise<PlaceResult[]> {
  const results = await textSearch(
    "tempat wisata terbaik Yogyakarta top attractions",
    50
  );
  const detailsList = await Promise.all(
    results.map((r) => placeDetails(r.place_id))
  );
  return results.map((raw, i) => normaliseCafe(raw, detailsList[i]));
}

export async function getAttractionBySlug(
  slug: string
): Promise<PlaceResult | null> {
  const all = await getTopAttractions();
  return all.find((p) => slugify(p.name) === slug) ?? null;
}

// ─── Slugify (mirrors the one in DiscoverListingLayout) ──────────────────────

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
