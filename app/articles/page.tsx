"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, RotateCcw, Search } from "lucide-react";
import { Footer } from "../components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Article data ── */

const CATEGORIES = [
    "All",
    "Culture",
    "Heritage",
    "Food & Drink",
    "Nature",
    "Adventure",
    "Events",
];

interface Article {
    id: number;
    title: string;
    category: string;
    image: string;
    size: "small" | "large";
}

const ARTICLES: Article[] = [
    {
        id: 1,
        title: "Where to Explore in Yogyakarta: A Heritage Lover's Guide for Every Interest",
        category: "Heritage",
        image: "/assets/keraton.webp",
        size: "small",
    },
    {
        id: 2,
        title: "Family-Friendly Cultural Spots in Yogyakarta",
        category: "Culture",
        image: "/assets/candi-prambanan.webp",
        size: "large",
    },
    {
        id: 3,
        title: "A Foodie's Guide to Yogyakarta's Best Traditional Markets",
        category: "Food & Drink",
        image: "/assets/Malioboro-Yogyakarta.jpg",
        size: "small",
    },
    {
        id: 4,
        title: "Ramayana Ballet — An Unforgettable Night at Prambanan",
        category: "Events",
        image: "/assets/ramayana-ballet.jpg",
        size: "small",
    },
    {
        id: 5,
        title: "Warungs That Locals Swear By",
        category: "Food & Drink",
        image: "/assets/the-kraton-of-yogyakarta.jpg",
        size: "small",
    },
    {
        id: 6,
        title: "Sultan's Palace Brunch and Javanese Dining Experience",
        category: "Food & Drink",
        image: "/assets/prambanan.webp",
        size: "small",
    },
    {
        id: 7,
        title: "Spring Festival Events in Yogyakarta",
        category: "Events",
        image: "/assets/gunung-kidul-beach.avif",
        size: "small",
    },
    {
        id: 8,
        title: "Gamelan Tournament & Watch Parties in Yogyakarta",
        category: "Culture",
        image: "/assets/main-image.webp",
        size: "small",
    },
    {
        id: 9,
        title: "Tee It Up — Your Guide to Heritage Trails in Yogyakarta",
        category: "Adventure",
        image: "/assets/tugu.webp",
        size: "small",
    },
    {
        id: 10,
        title: "Yogyakarta Photo Spots: Best Views & Instagram-Worthy Locations",
        category: "Nature",
        image: "/assets/high_quality.avif",
        size: "small",
    },
];

/* ── Page component ── */
export default function ArticlesPage() {

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(10);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredArticles = ARTICLES.filter((a) => {
        const matchesCategory =
            selectedCategory === "All" || a.category === selectedCategory;
        const matchesSearch =
            searchQuery.trim() === "" ||
            a.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const visibleArticles = filteredArticles.slice(0, visibleCount);

    return (
        <main className="min-h-screen bg-cream text-gray-900">
            {/* ── 2. Hero Section ── */}
            <ScrollReveal>
                <section className="bg-cream px-6 md:px-16 pt-28 md:pt-36 pb-12 md:py-20">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-center">
                        {/* Left — Heading + Overlapping Images */}
                        <div className="flex-1 min-w-0">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8 font-caveat uppercase">
                                All About
                                Yogyakarta
                            </h1>

                            {/* Overlapping images cluster */}
                            <div className="relative w-full max-w-[420px] h-[220px] md:h-[280px]">
                                {/* Back image */}
                                <div className="absolute top-0 left-0 w-[55%] h-full rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/assets/gunung-kidul-beach.avif"
                                        alt="Yogyakarta landscape"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Front image — overlapping */}
                                <div className="absolute top-6 left-[38%] w-[55%] h-[85%] rounded-2xl overflow-hidden shadow-xl border-4 border-cream">
                                    <Image
                                        src="/assets/candi-prambanan.webp"
                                        alt="Yogyakarta culture"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right — Description */}
                        <div className="flex-1 ">
                            {/* Teal divider */}
                            <p className="text-[15px] md:text-base leading-relaxed text-gray-700 max-w-lg">
                                Yogyakarta is a place where centuries-old culture comes alive —
                                a living testament of art, heritage, and warmth. Whether you&apos;re
                                exploring the majestic{" "}
                                <span className="font-semibold">Kraton</span>, savoring local
                                delicacies at bustling night markets, or finding peace in the
                                shadow of ancient temples — there is something magical waiting
                                around every corner. Use the articles below to plan your
                                journey, discover hidden gems, and immerse yourself in the
                                spirit of Java&apos;s cultural heartland.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── 3. Filter Bar ── */}
                <section className="bg-cream flex justify-between md:flex-row flex-col max-w-7xl mx-auto gap-6">
                    {/* Search input */}
                    <div className="relative flex flex-1 w-full items-center">
                        <Search size={16} className="absolute left-3.5 text-gray-400 pointer-events-none" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search articles..."
                            className="pl-10 pr-4 py-2.5 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all w-48 md:w-full"
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
                        {/* Filter button */}
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
                            Filter
                        </button>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto pb-6 ">
                                        {/* Category filter pills — shown when filter is open */}
                        {isFilterOpen && (
                            <div className="w-full mt-3 flex flex-wrap gap-2 animate-[fadeIn_0.3s_ease]">
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`rounded-full px-4 py-2 text-sm font-medium border transition-all ${selectedCategory === cat
                                            ? "bg-black text-white border-black"
                                            : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        )}
                </section>

                {/* ── 4. Article Cards Grid ── */}
                <section className="bg-cream px-6 md:px-16 pb-16">
                    <div className="max-w-7xl mx-auto">
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

                        {/* Load More */}
                        {visibleCount < filteredArticles.length && (
                            <div className="flex justify-center mt-10">
                                <button
                                    onClick={() => setVisibleCount((c) => c + 6)}
                                    className="flex items-center gap-2 border-2 border-gray-900 rounded-full px-8 py-3 text-sm font-bold hover:bg-gray-900 hover:text-white transition-all"
                                >
                                    <RotateCcw size={16} />
                                    Load More
                                </button>
                            </div>
                        )}

                        {/* Load More — always show if articles visible */}
                        {visibleCount >= filteredArticles.length &&
                            filteredArticles.length > 0 && (
                                <div className="flex justify-center mt-10">
                                    <button className="flex items-center gap-2 border-2 border-gray-900 rounded-full px-8 py-3 text-sm font-bold hover:bg-gray-900 hover:text-white transition-all">
                                        <RotateCcw size={16} />
                                        Load More
                                    </button>
                                </div>
                            )}
                    </div>
                </section>
            </ScrollReveal>

            <Footer />
        </main>
    );
}

/* ── Article Card Component ── */
function ArticleCard({
    article,
    aspectTall = false,
}: {
    article: Article;
    aspectTall?: boolean;
}) {
    return (
        <Link
            href={`/articles/${article.id}`}
            className={`group relative block rounded-2xl overflow-hidden ${aspectTall ? "min-h-[340px] md:min-h-[420px]" : "min-h-[280px] md:min-h-[340px]"
                }`}
        >
            {/* Background Image */}
            <Image
                src={article.image}
                alt={article.title}
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
                <span className="text-white/70 text-xs md:text-sm font-medium tracking-wide">
                    {article.category}
                </span>
            </div>
        </Link>
    );
}
