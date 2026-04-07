"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { Footer } from "@/app/components/Footer";
import type { CategoryItem } from "@/data/categoryData";

interface CategoryPageProps {
  title: string;
  items: CategoryItem[];
}

export default function CategoryPage({ title, items }: CategoryPageProps) {
  const [sortOpen, setSortOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  // Collect unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    items.forEach((item) => item.tags.forEach((tag) => tagSet.add(tag)));
    return ["All", ...Array.from(tagSet).sort()];
  }, [items]);

  // Filter items
  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.tags.includes(activeFilter));
  }, [items, activeFilter]);

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
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-jakarta mb-8">
          {title}
        </h1>

        {/* Sort / Filter dropdown */}
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

          {/* Dropdown */}
          {sortOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setSortOpen(false)}
              />
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 min-w-[200px] max-h-[320px] overflow-y-auto py-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setActiveFilter(tag);
                      setSortOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-[14px] font-medium transition-colors ${
                      activeFilter === tag
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Cards grid */}
      <section className="px-6 md:px-10 lg:px-14 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <article
              key={item.name}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 aspect-[3/4] cursor-pointer"
              style={{
                animationDelay: `${index * 60}ms`,
                animation: "cardFadeIn 0.5s ease-out forwards",
                opacity: 0,
              }}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover:from-black/85 transition-all duration-500" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-5">
                {/* Title at top */}
                <h3 className="text-white font-bold text-[17px] leading-snug drop-shadow-md max-w-[85%]">
                  {item.name}
                </h3>

                {/* Tags at bottom */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-gray-900/70 backdrop-blur-sm text-white text-[11px] font-medium rounded-full px-3 py-1 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-gray-400">
            <p className="text-lg font-medium">No items found for &ldquo;{activeFilter}&rdquo;</p>
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
