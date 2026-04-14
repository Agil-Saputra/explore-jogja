"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowLeft, Star } from "lucide-react";
import { Footer } from "@/app/components/Footer";

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
  /** Noun used in the empty-state message, e.g. "beaches" */
  emptyNoun: string;
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
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const sentinelRef = useRef<HTMLDivElement>(null);

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

  // Filter items by selected category
  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) =>
      item.categories
        ? item.categories
            .split(",")
            .map((c) => c.trim())
            .includes(activeFilter)
        : false,
    );
  }, [items, activeFilter]);

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [activeFilter]);

  // Items currently visible on screen
  const visibleItems = useMemo(
    () => filteredItems.slice(0, visibleCount),
    [filteredItems, visibleCount],
  );
  const hasMore = visibleCount < filteredItems.length;

  // Load more when sentinel enters viewport
  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, filteredItems.length));
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
        <Link
          href="/discover"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-[15px] font-medium mb-6 group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back to Discover</span>
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-jakarta mb-3">
          {title}
        </h1>
        <p className="text-gray-500 text-[15px] mb-8 max-w-xl">{subtitle}</p>

        {/* Filter dropdown — only show if there are categories */}
        {allCategories.length > 1 && (
          <div className="relative inline-block mb-10">
            <button
              onClick={() => setSortOpen(!sortOpen)}
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
                {/* Backdrop */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setSortOpen(false)}
                />
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 min-w-[200px] max-h-[320px] overflow-y-auto py-2">
                  {allCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveFilter(cat);
                        setSortOpen(false);
                      }}
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
              <Link
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
              </Link>
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
              No {emptyNoun} found for &ldquo;{activeFilter}&rdquo;
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-4 text-gray-900 underline underline-offset-4 font-medium text-[15px]"
            >
              Show all
            </button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
