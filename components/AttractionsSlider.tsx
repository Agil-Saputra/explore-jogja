"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale } from "@/components/LocaleContext";
import { useHorizontalGalleryScroll } from "@/app/hooks/useHorizontalGalleryScroll";

const attractionsData = [
  {
    image: "/assets/aerial-view-of-the-tugu-jogja.jpeg",
    title: "Tugu Jogja, A Timeless Icon",
  },
  {
    image: "/assets/candi-prambanan.webp",
    title: "Prambanan Temple Complex",
  },
  {
    image: "/assets/keraton.webp",
    title: "The Royal Keraton Palace",
  },
  {
    image: "/assets/gunung-kidul-beach.avif",
    title: "Gunung Kidul Coastal Wonders",
  },
  {
    image: "/assets/Malioboro-Yogyakarta.jpg",
    title: "Malioboro Street Heritage",
  },
  {
    image: "/assets/ramayana-ballet.jpg",
    title: "Ramayana Ballet Performance",
  },
  {
    image: "/assets/the-kraton-of-yogyakarta.jpg",
    title: "The Kraton of Yogyakarta",
  },
  {
    image: "/assets/prambanan.webp",
    title: "Ancient Hindu Legacy",
  },
];



export default function AttractionsSlider() {
  const { t } = useLocale();
  // Horizontal gallery refs — wrapper is the pin trigger, strip is translated on X
  const horizWrapperRef = useRef<HTMLDivElement>(null);
  const horizStripRef = useRef<HTMLDivElement>(null);

  const data = attractionsData;

  // Desktop pin + horizontal translate; mobile uses native overflow-x snap
  useHorizontalGalleryScroll(
    horizWrapperRef as React.RefObject<HTMLElement | null>,
    horizStripRef as React.RefObject<HTMLElement | null>,
  );

  // Strip width changes when the tab changes — re-measure the ScrollTrigger
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative w-full bg-white z-20 overflow-hidden">
      <div
        ref={horizWrapperRef}
        className="horiz-gallery-wrapper relative w-full"
      >
        {/* Header — normal vertical flow, NOT inside the pinned translate */}
        <div className="px-8 pt-16 lg:pt-32 pb-12 lg:pb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            {/* Title + View All */}
            <div className="flex items-end gap-6 relative">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-jakarta text-gray-900">
                {t("attractionsSlider.title")}
              </h2>
              <a
                href="#"
                className="inline-flex items-center gap-1 border-2 border-gray-900 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-colors mb-1 whitespace-nowrap"
              >
                {t("attractionsSlider.viewAll")}
              </a>
              <div className="flex flex-col items-start justify-end mb-16 px-4 absolute -bottom-10 -right-54">
                <p className="font-caveat text-2xl text-center uppercase leading-snug font-semibold text-gray-800 max-w-[20ch]">
                  {t("attractionsSlider.decorativeText")}
                </p>
                {/* Custom Arrow */}
                <div className=" transform translate-y-2 translate-x-4 scale-75 rotate-[90deg]">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 39 47"
                    fill="none"
                    className="text-black"
                  >
                    <path
                      d="M1 1C1.0221 1.0048 1.15377 1.09601 2.25615 2.07106C3.24706 2.94752 5.07851 4.6386 6.181 5.6196C7.28349 6.60061 7.59244 6.83044 8.60478 7.44622C9.61712 8.062 11.3235 9.05677 13.1657 10.0303C15.008 11.0039 16.9344 11.9261 18.0282 12.4609C19.6587 13.2582 20.0491 13.6233 20.8916 14.1554C21.6933 14.6616 23.0121 15.6562 25.1593 17.3848C25.6892 17.8114 26.2828 18.6508 27.2054 20.0344C27.9993 21.2251 28.6333 22.9294 29.1927 24.6357C29.4338 25.3708 29.7807 26.1735 30.2183 27.3493C30.4414 28.0736 30.6202 28.8761 30.9493 31.9988C31.1571 34.5705 31.4478 39.1464 31.7094 43.8846"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M27.0654 40.3569C27.0772 40.4347 27.2017 40.7186 27.8046 41.7269C28.0674 42.1664 28.7262 42.8549 29.5 43.5C30.2559 44.1302 30.5491 44.5781 30.8123 44.9415C31.0128 45.2181 31.2983 45.4115 31.5 45.5C31.6455 45.5639 32.2956 45.1533 33.539 44.3478C34.2124 43.9117 35.0522 43.5506 35.5806 43.2676C36.6982 42.6693 37.1219 42.2697 37.3876 42.0628C37.4383 42.0281 37.4893 41.9934 37.5245 41.9461C37.5596 41.8987 37.5772 41.8399 37.5953 41.7793"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Horizontal scroll strip — pinned + translated on desktop */}
        <div
          ref={horizStripRef}
          className="horiz-gallery-strip flex gap-4 md:gap-6 px-8 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none"
          style={{ willChange: "transform" }}
        >
          {data.map((item, idx) => (
            <div
              key={`attraction-${idx}`}
              className="group flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-[32vw] h-[420px] md:h-[560px] rounded-2xl overflow-hidden relative snap-start cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 32vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white text-xl md:text-2xl font-bold leading-tight font-jakarta">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
