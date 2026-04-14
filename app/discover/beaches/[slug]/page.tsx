"use client";

import { use, useMemo } from "react";
import PlaceDetailLayout, {
  slugify,
  type PlaceItem,
  type CategoryMeta,
} from "@/components/PlaceDetailLayout";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const beachesData: RawBeach[] = require("@/data/beaches.js");

/* ─── Raw data type ──────────────────────────────────────────── */
interface RawBeach {
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
  "Main Image": string;
  "Additional Images": string[];
  "Place Id": string;
  "Top 5 Reviews": { name: string; review: string }[];
  description: string;
}

/* ─── Normaliser ─────────────────────────────────────────────── */
function toPlaceItem(b: RawBeach): PlaceItem {
  return {
    name: b.Name,
    fullAddress: b.Fulladdress,
    street: b.Street,
    categories: b.Categories,
    phone: b.Phone,
    reviewCount: b["Review Count"],
    averageRating: b["Average Rating"],
    googleMapsUrl: b["Google Maps URL"],
    website: b.Website,
    mainImage: b["Main Image"],
    additionalImages: b["Additional Images"] ?? [],
    placeId: b["Place Id"],
    reviews: b["Top 5 Reviews"] ?? [],
    description: b.description,
  };
}

/* ─── Category metadata ──────────────────────────────────────── */
const category: CategoryMeta = {
  backLabel: "All Beaches",
  backHref: "/discover/beaches",
  otherTitle: "Other Beaches",
  otherDescription:
    "More stunning shores to explore in Yogyakarta — from hidden coves to dramatic clifftop views along the southern coast.",
  ctaLabel: "Beaches",
  basePath: "/discover/beaches",
  singularLabel: "Beach",
  reviewsHeading: "What Visitors Say",
  reviewsNoun: "beach",
};

/* ─── Page ───────────────────────────────────────────────────── */
export default function BeachDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const allItems = useMemo(() => beachesData.map(toPlaceItem), []);

  const item = useMemo(
    () => allItems.find((i) => slugify(i.name) === slug) ?? null,
    [slug, allItems],
  );

  return (
    <PlaceDetailLayout item={item} allItems={allItems} category={category} />
  );
}
