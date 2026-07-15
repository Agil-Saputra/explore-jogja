"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, RotateCcw, Search } from "lucide-react";
import { useLocale } from "@/components/LocaleContext";
import type { ContentfulArticle } from "@/lib/contentful";

const CATEGORIES = [
  "All",
  "Culture",
  "Heritage",
  "Food & Drink",
  "Nature",
  "Adventure",
  "Events",
];

interface ArticlesClientProps {
  articles: ContentfulArticle[];
}

export default function ArticlesClient({ articles }: ArticlesClientProps) {
  const { t } = useLocale();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((a) => {
    const matchesSearch =
      searchQuery.trim() === "" ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  return (
    <>
      {/* ── Filter Bar ── */}
      <section className="bg-cream flex justify-between md:flex-row flex-col max-w-7xl mx-auto gap-6 max-md:\px-6">
        {/* Search input */}
        <div className="relative flex  w-full items-center">
          <Search
            size={16}
            className="absolute left-3.5 text-gray-400 pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("articles.searchPlaceholder")}
            className="pl-10 pr-4 py-2.5 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all w-full "
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="8" y1="12" x2="16" y2="12" />
              <line x1="11" y1="18" x2="13" y2="18" />
            </svg>
            {t("articles.filter")}
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto pb-6">
        {isFilterOpen && (
          <div className="w-full mt-3 flex flex-wrap gap-2 animate-[fadeIn_0.3s_ease] px-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium border transition-all ${
                  selectedCategory === cat
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                }`}
              >
                {cat === "All"
                  ? t("articles.all")
                  : t(`articles.categories.${cat}`)}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* ── Article Cards Grid ── */}
      <section className="bg-cream px-6 md:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          {visibleArticles.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400">
              <Search size={48} className="mb-4 opacity-30" />
              <p className="text-lg font-medium">No articles found</p>
              <p className="text-sm mt-1">Try a different search term</p>
            </div>
          ) : (
            <>
              {/* Row 1 — 1 small + 1 large */}
              {visibleArticles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 mb-4">
                  {visibleArticles[0] && (
                    <ArticleCard article={visibleArticles[0]} />
                  )}
                  {visibleArticles[1] && (
                    <ArticleCard article={visibleArticles[1]} aspectTall />
                  )}
                </div>
              )}

              {/* Row 2 — 3 equal */}
              {visibleArticles.length > 2 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {visibleArticles.slice(2, 5).map((a) => (
                    <ArticleCard key={a.id} article={a} />
                  ))}
                </div>
              )}

              {/* Row 3 — 2 equal */}
              {visibleArticles.length > 5 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {visibleArticles.slice(5, 7).map((a) => (
                    <ArticleCard key={a.id} article={a} />
                  ))}
                </div>
              )}

              {/* Row 4 — 3 equal */}
              {visibleArticles.length > 7 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {visibleArticles.slice(7, 10).map((a) => (
                    <ArticleCard key={a.id} article={a} />
                  ))}
                </div>
              )}
            </>
          )}

          {/* Load More */}
          {visibleCount < filteredArticles.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setVisibleCount((c) => c + 6)}
                className="flex items-center gap-2 border-2 border-gray-900 rounded-full px-8 py-3 text-sm font-bold hover:bg-gray-900 hover:text-white transition-all"
              >
                <RotateCcw size={16} />
                {t("articles.loadMore")}
              </button>
            </div>
          )}

          {visibleCount >= filteredArticles.length &&
            filteredArticles.length > 0 && (
              <div className="flex justify-center mt-10">
                <button className="flex items-center gap-2 border-2 border-gray-900 rounded-full px-8 py-3 text-sm font-bold hover:bg-gray-900 hover:text-white transition-all">
                  <RotateCcw size={16} />
                  {t("articles.loadMore")}
                </button>
              </div>
            )}
        </div>
      </section>
    </>
  );
}

/* ── Article Card Component ── */
function ArticleCard({
  article,
  aspectTall = false,
}: {
  article: ContentfulArticle;
  aspectTall?: boolean;
}) {
  const fallbackImage = "/assets/main-image.webp";
  const imgSrc = article.bannerImageUrl ?? fallbackImage;

  return (
    <a
      href={`/articles/${article.slug}`}
      className={`group relative block rounded-2xl overflow-hidden ${
        aspectTall
          ? "min-h-[340px] md:min-h-[420px]"
          : "min-h-[280px] md:min-h-[340px]"
      }`}
    >
      {/* Background Image */}
      <Image
        src={imgSrc}
        alt={article.bannerImageAlt ?? article.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <h3 className="text-white font-bold text-lg md:text-xl leading-snug mb-2 drop-shadow-lg">
          {article.title}
        </h3>
        <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm font-medium px-3 py-1 rounded-full border border-white/30">
          Read Article →
        </span>
      </div>
    </a>
  );
}
