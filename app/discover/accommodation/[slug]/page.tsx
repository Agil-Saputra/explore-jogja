"use client";

import { use, useMemo } from "react";
import PlaceDetailLayout, {
  slugify,
  type PlaceItem,
  type CategoryMeta,
} from "@/components/PlaceDetailLayout";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const accommodationsData: RawAccommodation[] = require("@/data/accomodation.js").default;

/* ─── Raw data type ──────────────────────────────────────────── */
interface RawAccommodation {
  Name: string;
  Fulladdress: string;
  Street: string;
  Categories: string | null;
  Phone: string | null;
  "Review Count": number | null;
  "Average Rating": string;
  "Google Maps URL": string;
  Latitude: number;
  Longitude: number;
  Website: string | null;
  "Main Image": string;
  "Additional Images": string[];
  "Place Id": string;
  "Top 5 Reviews": { name: string; review: string }[];
  description: string;
}

/* ─── Normaliser ─────────────────────────────────────────────── */
function toPlaceItem(a: RawAccommodation): PlaceItem {
  return {
    name: a.Name,
    fullAddress: a.Fulladdress,
    street: a.Street,
    categories: a.Categories,
    phone: a.Phone,
    reviewCount: a["Review Count"],
    averageRating: a["Average Rating"],
    googleMapsUrl: a["Google Maps URL"],
    website: a.Website,
    mainImage: a["Main Image"],
    additionalImages: a["Additional Images"] ?? [],
    placeId: a["Place Id"],
    reviews: a["Top 5 Reviews"] ?? [],
    description: a.description,
  };
}

/* ─── Category metadata ──────────────────────────────────────── */
const category: CategoryMeta = {
  backLabel: "All Accommodation",
  backHref: "/discover/accommodation",
  otherTitle: "Other Places to Stay",
  otherDescription:
    "More great accommodations to explore in Yogyakarta — from boutique hotels to cozy guesthouses near the city\u2019s top attractions.",
  ctaLabel: "Accommodation",
  basePath: "/discover/accommodation",
  singularLabel: "Accommodation",
  reviewsHeading: "What Guests Say",
  reviewsNoun: "accommodation",
};

/* ─── Page ───────────────────────────────────────────────────── */
export default function AccommodationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const allItems = useMemo(() => accommodationsData.map(toPlaceItem), []);

  const item = useMemo(
    () => allItems.find((i) => slugify(i.name) === slug) ?? null,
    [slug, allItems],
  );

  return (
    <PlaceDetailLayout item={item} allItems={allItems} category={category} />
  );
}
