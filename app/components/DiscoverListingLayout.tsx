"use client";

import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback,
} from "react";
import Image from "next/image";
import { ChevronDown, ArrowLeft, Star } from "lucide-react";
import { Footer } from "@/app/components/Footer";
import { useLocale } from "@/components/LocaleContext";

/* ------------------------------------------------------------------ */
/*  Normalised item shape — each page maps its raw data into this     */
/* ------------------------------------------------------------------ */
export interface ListingItem {
  /** Unique key used for React list rendering */
  id: string;
  name: string;
  street?: string;
  fullAddress?: string;
  categories?: string | null;
  averageRating?: string;
  /** Total number of user reviews */
  reviewCount?: number | null;
  /** Google Places price level: 0=Free, 1=Inexpensive, 2=Moderate, 3=Expensive, 4=Very Expensive */
  priceLevel?: number | null;
  mainImage?: string;
}

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */
export interface DiscoverListingLayoutProps {
  /** Page heading */
  title: string;
  /** Short description shown below the heading */
  subtitle: string;
  /** Base path for detail links, e.g. "/discover/beaches" */
  basePath: string;
  /** Optional noun for empty state, e.g. "accommodation" */
  emptyNoun?: string;
  /** The normalised items to display */
  items: ListingItem[];
  /**
   * Optional custom renderer for the bottom portion of each card.
   * Receives the item and its parsed tags array.
   * If not provided, the default renderer shows street + category tags.
   */
  renderCardFooter?: (item: ListingItem, tags: string[]) => React.ReactNode;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
const INITIAL_COUNT = 8;
const LOAD_MORE_COUNT = 8;

const PRICE_OPTIONS = [
  { label: "Semua Harga", value: -1 },
  { label: "Gratis", value: 0 },
  { label: "Murah", value: 1 },
  { label: "Sedang", value: 2 },
  { label: "Mahal", value: 3 },
  { label: "Sangat Mahal", value: 4 },
];

type SortOption = "default" | "rating" | "reviews";

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function DiscoverListingLayout({
  title,
  subtitle,
  basePath,
  emptyNoun,
  items,
  renderCardFooter,
}: DiscoverListingLayoutProps) {
  const [sortOpen, setSortOpen] = useState(false);
  const [sortByOpen, setSortByOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [priceFilter, setPriceFilter] = useState<number>(-1);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const { t } = useLocale();
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Check if any items have priceLevel data
  const hasPriceLevels = useMemo(
    () => items.some((item) => item.priceLevel != null),
    [items]
  );

  // Collect unique categories
  const allCategories = useMemo(() => {
    const catSet = new Set<string>();
    items.forEach((item) => {
      if (item.categories) {
        item.categories.split(",").forEach((c) => catSet.add(c.trim()));
      }
    });
    return ["All", ...Array.from(catSet).sort()];
  }, [items]);

  // Filter by category then by price level, then sort
  const filteredItems = useMemo(() => {
    let result = items;

    // Category filter
    if (activeFilter !== "All") {
      result = result.filter((item) =>
        item.categories
          ? item.categories
              .split(",")
              .map((c) => c.trim())
              .includes(activeFilter)
          : false,
      );
    }

    // Price level filter
    if (priceFilter !== -1) {
      result = result.filter((item) => item.priceLevel === priceFilter);
    }

    // Sort
    if (sortBy === "rating") {
      result = [...result].sort((a, b) => {
        const rA = parseFloat(a.averageRating?.replace(",", ".") ?? "0") || 0;
        const rB = parseFloat(b.averageRating?.replace(",", ".") ?? "0") || 0;
        return rB - rA;
      });
    } else if (sortBy === "reviews") {
      result = [...result].sort(
        (a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0),
      );
    }

    return result;
  }, [items, activeFilter, priceFilter, sortBy]);

  // Reset visible count when filter/sort changes
  useEffect(() => {
    const timer = setTimeout(() => setVisibleCount(INITIAL_COUNT), 0);
    return () => clearTimeout(timer);
  }, [activeFilter, priceFilter, sortBy]);

  // Items currently visible on screen
  const visibleItems = useMemo(
    () => filteredItems.slice(0, visibleCount),
    [filteredItems, visibleCount],
  );
  const hasMore = visibleCount < filteredItems.length;

  // Load more when sentinel enters viewport
  const loadMore = useCallback(() => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_COUNT, filteredItems.length),
    );
  }, [filteredItems.length]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  // Default card footer renderer
  const defaultFooter = (item: ListingItem, tags: string[]) => (
    <div className="flex flex-col gap-2">
      {item.street && item.street !== item.fullAddress && (
        <p className="text-white/70 text-[11px] font-medium leading-snug line-clamp-1">
          {item.street}
        </p>
      )}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-900/70 backdrop-blur-sm text-white text-[11px] font-medium rounded-full px-3 py-1 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <main className="min-h-screen bg-cream text-gray-900">
      {/* Header section */}
      <section className="pt-28 md:pt-36 px-6 md:px-10 lg:px-14">
        {/* Back link */}
        <a
          href="/discover"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-[15px] font-medium mb-6 group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>{t("discoverListing.backToDiscover")}</span>
        </a>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-jakarta mb-3">
          {title}
        </h1>
        <p className="text-gray-500 text-[15px] mb-8 max-w-xl">{subtitle}</p>

        {/* All filters row — category, sort, price side-by-side */}
        <div className="flex flex-wrap items-start gap-3 mb-10">

          {/* Category dropdown */}
          {allCategories.length > 1 && (
            <div className="relative inline-block">
              <button
                onClick={() => { setSortOpen(!sortOpen); setSortByOpen(false); setPriceOpen(false); }}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-[15px] font-medium hover:border-gray-400 transition-colors shadow-sm"
              >
                <span>{activeFilter}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`}
                />
              </button>

              {sortOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setSortOpen(false)} />
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 min-w-[200px] max-h-[320px] overflow-y-auto py-2">
                    {allCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setActiveFilter(cat); setSortOpen(false); }}
                        className={`block w-full text-left px-4 py-2 text-[14px] font-medium transition-colors ${
                          activeFilter === cat
                            ? "bg-gray-900 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Sort dropdown */}
          <div className="relative inline-block">
            <button
              onClick={() => { setSortByOpen(!sortByOpen); setSortOpen(false); setPriceOpen(false); }}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-[15px] font-medium hover:border-gray-400 transition-colors shadow-sm"
            >
              <span>
                {sortBy === "default" && "Urutkan"}
                {sortBy === "rating" && "Review Terbaik"}
                {sortBy === "reviews" && "Review Terbanyak"}
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${sortByOpen ? "rotate-180" : ""}`}
              />
            </button>

            {sortByOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setSortByOpen(false)} />
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 min-w-[200px] py-2">
                  {([
                    { value: "default", label: "Default" },
                    { value: "rating",  label: "Review Terbaik" },
                    { value: "reviews", label: "Review Terbanyak" },
                  ] as { value: SortOption; label: string }[]).map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setSortBy(opt.value); setSortByOpen(false); }}
                      className={`block w-full text-left px-4 py-2 text-[14px] font-medium transition-colors ${
                        sortBy === opt.value
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Price dropdown — only shown when data has price levels */}
          {hasPriceLevels && (
            <div className="relative inline-block">
              <button
                onClick={() => { setPriceOpen(!priceOpen); setSortOpen(false); setSortByOpen(false); }}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-[15px] font-medium hover:border-gray-400 transition-colors shadow-sm"
              >
                <span>
                  {PRICE_OPTIONS.find((o) => o.value === priceFilter)?.label ?? "Harga"}
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${priceOpen ? "rotate-180" : ""}`}
                />
              </button>

              {priceOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setPriceOpen(false)} />
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 min-w-[200px] py-2">
                    {PRICE_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setPriceFilter(opt.value); setPriceOpen(false); }}
                        className={`block w-full text-left px-4 py-2 text-[14px] font-medium transition-colors ${
                          priceFilter === opt.value
                            ? "bg-gray-900 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Cards grid */}
      <section className="px-6 md:px-10 lg:px-14 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visibleItems.map((item, index) => {
            const slug = slugify(item.name);
            const tags = item.categories
              ? item.categories.split(",").map((c) => c.trim())
              : [];
            const rating = item.averageRating
              ? item.averageRating.replace(",", ".")
              : null;

            return (
              <a
                key={item.id}
                href={`${basePath}/${slug}`}
                className="block"
              >
                <article
                  className="group relative rounded-2xl overflow-hidden bg-gray-900 aspect-[3/4] cursor-pointer"
                  style={{
                    animationDelay: `${index * 60}ms`,
                    animation: "cardFadeIn 0.5s ease-out forwards",
                    opacity: 0,
                  }}
                >
                  {/* Image */}
                  {item.mainImage ? (
                    <Image
                      src={item.mainImage}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-800" />
                  )}

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover:from-black/85 transition-all duration-500" />

                  {/* Rating badge */}
                  {rating && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-[12px] font-semibold rounded-full px-2.5 py-1 border border-white/10">
                      <Star
                        size={11}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <span>{rating}</span>
                    </div>
                  )}

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    {/* Title at top */}
                    <h3 className="text-white font-bold text-[17px] leading-snug drop-shadow-md max-w-[85%]">
                      {item.name}
                    </h3>

                    {/* Footer at bottom */}
                    {renderCardFooter
                      ? renderCardFooter(item, tags)
                      : defaultFooter(item, tags)}
                  </div>
                </article>
              </a>
            );
          })}
        </div>

        {/* Sentinel for infinite scroll */}
        {hasMore && (
          <div ref={sentinelRef} className="flex justify-center py-12">
            <div className="h-8 w-8 rounded-full border-2 border-gray-300 border-t-gray-900 animate-spin" />
          </div>
        )}

        {/* Empty state */}
        {visibleItems.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-gray-400">
            <p className="text-lg font-medium">
              {emptyNoun 
                ? `No ${emptyNoun} found for \u201c${activeFilter}\u201d`
                : `${t("discoverListing.emptyState")} \u201c${activeFilter}\u201d`}
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-4 text-gray-900 underline underline-offset-4 font-medium text-[15px]"
            >
              {t("discoverListing.showAll")}
            </button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
