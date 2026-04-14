"use client";

import { use, useMemo } from "react";
import PlaceDetailLayout, {
  slugify,
  type PlaceItem,
  type CategoryMeta,
} from "@/components/PlaceDetailLayout";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const cafesData: RawCafe[] = require("@/data/cafes.js");

/* ─── Raw data type ──────────────────────────────────────────── */
interface RawCafe {
  Name: string;
  Fulladdress: string;
  Street: string;
  Categories: string;
  Phone: string | null;
  "Review Count": number | null;
  "Average Rating": string;
  "Google Maps URL": string;
  Latitude: number;
  Longitude: number;
  Website: string | null;
  MainImage: string;
  AdditionalImages: string[];
  "Place Id": string;
  "Top 5 Reviews": { name: string; review: string }[];
  description: string;
}

/* ─── Normaliser ─────────────────────────────────────────────── */
function toPlaceItem(c: RawCafe): PlaceItem {
  return {
    name: c.Name,
    fullAddress: c.Fulladdress,
    street: c.Street,
    categories: c.Categories,
    phone: c.Phone,
    reviewCount: c["Review Count"],
    averageRating: c["Average Rating"],
    googleMapsUrl: c["Google Maps URL"],
    website: c.Website,
    mainImage: c.MainImage,
    additionalImages: c.AdditionalImages ?? [],
    placeId: c["Place Id"],
    reviews: c["Top 5 Reviews"] ?? [],
    description: c.description,
  };
}

/* ─── Category metadata ──────────────────────────────────────── */
const category: CategoryMeta = {
  backLabel: "All Aesthetic Cafes",
  backHref: "/discover/aesthetic-cafes",
  otherTitle: "Other Cafes",
  otherDescription:
    "Yogyakarta offers diverse aesthetic cafes for every taste — from cozy neighborhood spots to stylish modern lounges and creative spaces set near the city\u2019s cultural highlights.",
  ctaLabel: "Aesthetic Cafes",
  basePath: "/discover/aesthetic-cafes",
  singularLabel: "Cafe",
  reviewsHeading: "What Visitors Say",
  reviewsNoun: "cafe",
};

/* ─── Page ───────────────────────────────────────────────────── */
export default function CafeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const allItems = useMemo(() => cafesData.map(toPlaceItem), []);

  const item = useMemo(
    () => allItems.find((i) => slugify(i.name) === slug) ?? null,
    [slug, allItems],
  );

  return (
    <PlaceDetailLayout item={item} allItems={allItems} category={category} />
  );
}
