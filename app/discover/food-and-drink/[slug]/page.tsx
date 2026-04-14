"use client";

import { use, useMemo } from "react";
import PlaceDetailLayout, {
  slugify,
  type PlaceItem,
  type CategoryMeta,
} from "@/components/PlaceDetailLayout";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const restaurantsData: RawRestaurant[] = require("@/data/restaurant.js").default;

/* ─── Raw data type ──────────────────────────────────────────── */
interface RawRestaurant {
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
function toPlaceItem(r: RawRestaurant): PlaceItem {
  return {
    name: r.Name,
    fullAddress: r.Fulladdress,
    street: r.Street,
    categories: r.Categories,
    phone: r.Phone,
    reviewCount: r["Review Count"],
    averageRating: r["Average Rating"],
    googleMapsUrl: r["Google Maps URL"],
    website: r.Website,
    mainImage: r["Main Image"],
    additionalImages: r["Additional Images"] ?? [],
    placeId: r["Place Id"],
    reviews: r["Top 5 Reviews"] ?? [],
    description: r.description,
  };
}

/* ─── Category metadata ──────────────────────────────────────── */
const category: CategoryMeta = {
  backLabel: "All Food & Drink",
  backHref: "/discover/food-and-drink",
  otherTitle: "Other Places to Eat",
  otherDescription:
    "More great restaurants to explore in Yogyakarta — from traditional Javanese cuisine to modern fusion dining and street food gems.",
  ctaLabel: "Food & Drink",
  basePath: "/discover/food-and-drink",
  singularLabel: "Restaurant",
  reviewsHeading: "What Diners Say",
  reviewsNoun: "restaurant",
};

/* ─── Page ───────────────────────────────────────────────────── */
export default function FoodDrinkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const allItems = useMemo(() => restaurantsData.map(toPlaceItem), []);

  const item = useMemo(
    () => allItems.find((i) => slugify(i.name) === slug) ?? null,
    [slug, allItems],
  );

  return (
    <PlaceDetailLayout item={item} allItems={allItems} category={category} />
  );
}
