"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  Globe,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Star,
  ExternalLink,
} from "lucide-react";
import { Footer } from "@/app/components/Footer";
import gsap from "gsap";

/* ─── Shared Types ───────────────────────────────────────────── */
export interface PlaceItem {
  name: string;
  fullAddress: string;
  street: string;
  categories: string | null;
  phone: string | null;
  reviewCount: number | null;
  averageRating: string;
  googleMapsUrl: string;
  website: string | null;
  mainImage: string;
  additionalImages: string[];
  placeId: string;
  reviews: { name: string; review: string }[];
  description: string;
}

export interface CategoryMeta {
  /** Label shown in the back link, e.g. "All Beaches" */
  backLabel: string;
  /** Href for the back link, e.g. "/discover/beaches" */
  backHref: string;
  /** Used in "Other X" heading, e.g. "Beaches" */
  otherTitle: string;
  /** Short description under "Other X" heading */
  otherDescription: string;
  /** CTA button label, e.g. "Beaches" */
  ctaLabel: string;
  /** Base path for detail links, e.g. "/discover/beaches" */
  basePath: string;
  /** Singular noun for "not found" message, e.g. "Beach" */
  singularLabel: string;
  /** Label for reviews heading, e.g. "What Visitors Say" */
  reviewsHeading?: string;
  /** Noun for empty review message, e.g. "beach" */
  reviewsNoun?: string;
}

/* ─── Helpers ────────────────────────────────────────────────── */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= Math.round(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-300 text-gray-300"
          }
        />
      ))}
    </div>
  );
}

/* ─── Reviews Marquee ────────────────────────────────────────── */
function ReviewsMarquee({
  reviews,
  rating,
  averageRating,
  reviewCount,
  heading,
  noun,
}: {
  reviews: { name: string; review: string }[];
  rating: number | null;
  averageRating: string;
  reviewCount: number | null;
  heading: string;
  noun: string;
}) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!marqueeRef.current || reviews.length === 0) return;

    const el = marqueeRef.current;
    const totalWidth = el.scrollWidth / 2;

    tweenRef.current = gsap.to(el, {
      x: -totalWidth,
      duration: reviews.length * 8,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => {
          return parseFloat(String(x)) % totalWidth;
        }),
      },
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [reviews]);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.resume();

  const cards = [...reviews, ...reviews];

  return (
    <section className="bg-cream py-16 md:py-24">
      {/* Section heading */}
      <div className="px-6 md:px-10 lg:px-16 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-jakarta mb-2">
          {heading}
        </h2>
        {rating !== null && (
          <div className="flex items-center gap-3 mt-2">
            <StarRating rating={rating} size={16} />
            <span className="text-[14px] font-semibold text-gray-700">
              {averageRating} / 5
            </span>
            {reviewCount !== null && (
              <span className="text-[13px] text-gray-400">
                ({reviewCount} reviews)
              </span>
            )}
          </div>
        )}
      </div>

      {/* Marquee with shadow edges */}
      {reviews.length > 0 ? (
        <div
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, var(--color-cream, #FAF9F6) 0%, transparent 100%)",
            }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, var(--color-cream, #FAF9F6) 0%, transparent 100%)",
            }}
          />

          {/* Animated row */}
          <div ref={marqueeRef} className="flex gap-5 w-max py-2 pl-10 md:pl-16 lg:pl-24">
            {cards.map((review, i) => (
              <div
                key={i}
                className="shrink-0 w-[300px] sm:w-[340px] md:w-[380px] bg-white rounded-2xl border border-gray-200/60 p-6 md:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[220px]"
              >
                {/* Review text */}
                <p className="text-[14px] md:text-[15px] font-semibold text-gray-800 leading-relaxed mb-6">
                  &ldquo;{review.review}&rdquo;
                </p>

                {/* Reviewer info */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[14px] font-bold text-gray-500 uppercase shrink-0 border border-gray-200">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="font-semibold text-[14px] text-gray-900 leading-none">
                      {review.name}
                    </p>
                    <p className="text-[12px] text-gray-400">
                      Visitor
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="px-6 md:px-10 lg:px-16">
          <div className="bg-white rounded-2xl p-7 text-gray-400 text-[14px]">
            No reviews available for this {noun}.
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── Main Layout Component ──────────────────────────────────── */
export default function PlaceDetailLayout({
  item,
  allItems,
  category,
}: {
  item: PlaceItem | null;
  allItems: PlaceItem[];
  category: CategoryMeta;
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const [otherOffset, setOtherOffset] = useState(0);

  const otherItems = useMemo(
    () => (item ? allItems.filter((i) => i.name !== item.name) : []),
    [item, allItems],
  );

  const visibleOtherItems = useMemo(
    () => otherItems.slice(otherOffset, otherOffset + 4),
    [otherItems, otherOffset],
  );

  /* ── not found ── */
  if (!item) {
    return (
      <main className="min-h-screen bg-cream text-gray-900 flex flex-col items-center justify-center pt-28 gap-4">
        <h1 className="text-3xl font-bold font-jakarta">
          {category.singularLabel} not found
        </h1>
        <Link
          href={category.backHref}
          className="text-gray-500 hover:text-gray-900 underline underline-offset-4 text-[15px]"
        >
          ← {category.backLabel}
        </Link>
      </main>
    );
  }

  /* ── derived data ── */
  const allImages = [item.mainImage, ...item.additionalImages].filter(
    Boolean,
  ) as string[];
  const reviews = item.reviews ?? [];
  const tags = item.categories
    ? item.categories.split(",").map((c) => c.trim())
    : [];
  const rating = item.averageRating
    ? parseFloat(item.averageRating.replace(",", "."))
    : null;

  /* ── image slider handlers ── */
  const prevImage = () =>
    setImageIndex((i) => (i - 1 + allImages.length) % allImages.length);
  const nextImage = () => setImageIndex((i) => (i + 1) % allImages.length);

  /* ── other items carousel handlers ── */
  const prevOther = () => setOtherOffset((o) => Math.max(0, o - 4));
  const nextOther = () =>
    setOtherOffset((o) => (o + 4 < otherItems.length ? o + 4 : o));

  /* ─────────────────────────────────────────────────────────── */
  return (
    <main className="min-h-screen bg-cream text-gray-900">
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="pt-28 md:pt-36 px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        {/* Back link */}
        <Link
          href={category.backHref}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-[15px] font-medium mb-8 group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>{category.backLabel}</span>
        </Link>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-5">

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight font-caveat leading-[1.1]">
              {item.name}
            </h1>

            {/* Star rating */}
            {rating !== null && (
              <div className="flex items-center gap-2.5">
                <StarRating rating={rating} size={16} />
                <span className="text-[14px] font-semibold text-gray-700">
                  {item.averageRating} / 5
                </span>
              </div>
            )}

            {/* Contact info */}
            <div className="flex flex-col gap-3 text-[14px] text-gray-600 pt-1">
              {item.phone && (
                <a
                  href={`tel:${item.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2.5 hover:text-gray-900 transition-colors w-fit"
                >
                  <Phone size={15} className="shrink-0 text-gray-400" />
                  <span>{item.phone}</span>
                </a>
              )}
              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-gray-900 transition-colors w-fit group/link"
                >
                  <Globe size={15} className="shrink-0 text-gray-400" />
                  <span className="truncate max-w-[260px] group-hover/link:underline underline-offset-2">
                    {item.website.replace(/^https?:\/\//, "").replace(
                      /\/$/,
                      "",
                    )}
                  </span>
                  <ExternalLink
                    size={12}
                    className="shrink-0 text-gray-300 group-hover/link:text-gray-500 transition-colors"
                  />
                </a>
              )}
              {item.googleMapsUrl && (
                <a
                  href={item.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2.5 hover:text-gray-900 transition-colors w-fit"
                >
                  <MapPin
                    size={15}
                    className="shrink-0 text-gray-400 mt-[1px]"
                  />
                  <span className="line-clamp-2 max-w-sm">
                    {item.fullAddress || item.street}
                  </span>
                </a>
              )}
            </div>

            {/* Description */}
            {item.description && (
              <p className="text-[15px] text-gray-600 leading-relaxed max-w-lg pt-1">
                {item.description}
              </p>
            )}
          </div>

          {/* Right column — main image */}
          <div className="w-full md:w-[46%] lg:w-[44%] flex-1 shrink-0">
            {item.mainImage ? (
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={item.mainImage}
                  alt={item.name}
                  width={2000}
                  height={2000}
                  priority
                  className="object-cover w-full h-[700px]"
                />
              </div>
            ) : (
              <div className="w-full aspect-[3/4] rounded-2xl bg-gray-200" />
            )}
          </div>
        </div>
      </section>

      {/* ══ IMAGE GALLERY SLIDER ══════════════════════════════ */}
      {allImages.length > 0 && (
        <section className="bg-cream py-12 md:py-16 px-6 md:px-10 lg:px-16">
          <div className="flex-1 mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            {/* Left — large image */}
            <div className="w-full md:w-[65%] shrink-0">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                <Image
                  src={allImages[imageIndex]}
                  alt={`${item.name} — photo ${imageIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 65vw"
                  className="object-cover"
                  priority={imageIndex === 0}
                />
              </div>
            </div>

            {/* Right — name + controls */}
            <div className="flex-1 flex flex-col justify-between self-stretch min-h-[200px] md:min-h-0 md:h-auto md:aspect-auto"
              style={{ minHeight: "inherit" }}
            >
              {/* Name at top */}
              <h3 className="text-xl md:text-2xl font-bold font-jakarta tracking-tight text-gray-900 leading-snug">
                {item.name} Gallery
              </h3>

              {/* Nav arrows + counter at bottom */}
              {allImages.length > 1 && (
                <div className="flex items-center gap-3 mt-6 md:mt-auto">
                  <button
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="Next image"
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <span className="text-[14px] text-gray-400 font-medium select-none ml-1">
                    Image {imageIndex + 1} / {allImages.length}
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ══ REVIEWS ══════════════════════════════════════════ */}
      <ReviewsMarquee
        reviews={reviews}
        rating={rating}
        averageRating={item.averageRating}
        reviewCount={item.reviewCount}
        heading={category.reviewsHeading ?? "What Visitors Say"}
        noun={category.reviewsNoun ?? category.singularLabel.toLowerCase()}
      />

      {/* ══ OTHER ITEMS ═════════════════════════════════════= */}
      {otherItems.length > 0 && (
        <section className="bg-[#E0E0EC] py-16 md:py-20 overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 pl-6 md:pl-10 lg:pl-16">
            {/* Left column — title, description, CTA + nav */}
            <div className="md:w-[28%] lg:w-[26%] shrink-0 flex flex-col justify-between pr-6 md:pr-0">
              <div>
                <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight font-jakarta leading-[1.15] mb-4">
                  {category.otherTitle}
                </h2>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  {category.otherDescription}
                </p>
              </div>

              {/* Bottom controls */}
              <div className="flex items-center gap-3 mt-8 md:mt-0">
                <Link
                  href={category.backHref}
                  className="inline-flex items-center bg-gray-900 text-white text-[13px] font-semibold rounded-full px-5 py-2.5 hover:bg-gray-700 transition-colors"
                >
                  {category.ctaLabel}
                </Link>
                <button
                  onClick={prevOther}
                  disabled={otherOffset === 0}
                  aria-label={`Previous ${category.otherTitle.toLowerCase()}`}
                  className="w-9 h-9 rounded-full border border-gray-400 bg-transparent flex items-center justify-center hover:border-gray-700 transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextOther}
                  disabled={otherOffset + 4 >= otherItems.length}
                  aria-label={`Next ${category.otherTitle.toLowerCase()}`}
                  className="w-9 h-9 rounded-full border border-gray-400 bg-transparent flex items-center justify-center hover:border-gray-700 transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Right column — four cards, overflow right */}
            <div className="flex-1 flex gap-5 pb-2 scrollbar-none md:pr-0 w-full">
              {visibleOtherItems.map((other) => {
                const otherSlug = slugify(other.name);
                const otherTags = other.categories
                  ? other.categories.split(",").map((c) => c.trim())
                  : [];

                return (
                  <Link
                    key={other.placeId || other.name}
                    href={`${category.basePath}/${otherSlug}`}
                    className="block shrink-0 w-[260px]"
                  >
                    <article
                      className="group relative rounded-2xl overflow-hidden bg-gray-900 aspect-[3/4] cursor-pointer"
                      style={{
                        animation: "cardFadeIn 0.4s ease-out forwards",
                        opacity: 0,
                      }}
                    >
                      {other.mainImage ? (
                        <Image
                          src={other.mainImage}
                          alt={other.name}
                          fill
                          sizes="280px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gray-800" />
                      )}

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 group-hover:from-black/70 transition-all duration-500" />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-between p-5">
                        <h3 className="text-white font-bold text-[16px] leading-snug drop-shadow-md max-w-[90%]">
                          {other.name}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {otherTags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block bg-transparent text-white text-[11px] font-medium rounded-full px-3 py-1 border border-white/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
