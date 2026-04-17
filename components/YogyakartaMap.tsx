"use client";

import Image from "next/image";
import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { SimpleOpacityReveal } from "@/app/components/RevealElements";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const GEO_URL = "/yogyakarta-districts.geojson";

const mapColor = "#F5F1E5";

/** Metadata for each kabupaten/kota in DIY */
const DISTRICT_DATA: Record<
  string,
  {
    displayName: string;
    description: string;
    color: string;
    hoverColor: string;
    labelCoords: [number, number];
    population: string;
    area: string;
    capital: string;
    image: string;
  }
> = {
  Bantul: {
    displayName: "Bantul",
    description: "Renowned for its stunning southern beaches and traditional batik craft villages.",
    color: mapColor,
    hoverColor: "#6AAF7E",
    labelCoords: [110.33, -7.92],
    population: "985,770",
    area: "506.85 km²",
    capital: "Bantul",
    image: "/assets/gunung-kidul-beach.avif",
  },
  GunungKidul: {
    displayName: "Gunung Kidul",
    description: "Home to dramatic karst landscapes, hidden beaches, and ancient cave systems.",
    color: mapColor,
    hoverColor: "#B8956A",
    labelCoords: [110.62, -8.0],
    population: "747,161",
    area: "1,485.36 km²",
    capital: "Wonosari",
    image: "/assets/landscape.png",
  },
  KotaYogyakarta: {
    displayName: "Kota Yogyakarta",
    description: "The royal heart of Javanese culture — home to Keraton and Malioboro Street.",
    color: mapColor,
    hoverColor: "#E07B6F",
    labelCoords: [110.36, -7.795],
    population: "373,589",
    area: "32.5 km²",
    capital: "Yogyakarta",
    image: "/assets/Malioboro-Yogyakarta.jpg",
  },
  KulonProgo: {
    displayName: "Kulon Progo",
    description: "A rising gem with Menoreh Hills, tea plantations, and the new international airport.",
    color: mapColor,
    hoverColor: "#7DA3C5",
    labelCoords: [110.12, -7.82],
    population: "436,395",
    area: "586.27 km²",
    capital: "Wates",
    image: "/assets/aerial-view-of-the-tugu-jogja.jpeg",
  },
  Sleman: {
    displayName: "Sleman",
    description: "Gateway to the majestic Mount Merapi and home to premier universities.",
    color: mapColor,
    hoverColor: "#9D7FAF",
    labelCoords: [110.38, -7.65],
    population: "1,180,479",
    area: "574.82 km²",
    capital: "Sleman",
    image: "/assets/candi-prambanan.webp",
  },
};

interface TooltipData {
  name: string;
  displayName: string;
  description: string;
  population: string;
  area: string;
  capital: string;
  x: number;
  y: number;
}

export default function YogyakartaMap() {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);
  const districtListRef = useRef<HTMLDivElement>(null);

  // GSAP word-by-word scroll reveal for section title
  useGSAP(() => {
    if (sectionTitleRef.current) {
      const words = gsap.utils.toArray(sectionTitleRef.current.querySelectorAll('.word')) as HTMLElement[];
      gsap.fromTo(
        words,
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionTitleRef.current,
            start: "top 85%",
            end: "bottom 35%",
            scrub: true,
          },
        }
      );
    }
  });

  // Stagger reveal for district list cards
  useGSAP(() => {
    if (districtListRef.current) {
      const cards = gsap.utils.toArray(
        districtListRef.current.querySelectorAll('.district-card')
      ) as HTMLElement[];

      gsap.set(cards, { opacity: 0, y: 40 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: districtListRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }
  });

  // Lock body scroll when modal is open (also stops Lenis smooth scroll)
  useEffect(() => {
    if (selectedDistrict) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      // Stop Lenis smooth scrolling
      window.__lenis?.stop();
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      // Resume Lenis smooth scrolling
      window.__lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.__lenis?.start();
    };
  }, [selectedDistrict]);

  const handleDistrictClick = useCallback((name: string) => {
    if (DISTRICT_DATA[name]) {
      setSelectedDistrict(name);
    }
  }, []);

  const handleMouseEnter = useCallback(
    (
      geo: { properties: Record<string, unknown> },
      event: React.MouseEvent
    ) => {
      const name = geo.properties.name as string;
      const data = DISTRICT_DATA[name];
      if (!data) return;

      const { clientX, clientY } = event;
      setTooltip({
        name,
        displayName: data.displayName,
        description: data.description,
        population: data.population,
        area: data.area,
        capital: data.capital,
        x: clientX,
        y: clientY,
      });
      setHoveredId(name);
    },
    []
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      if (tooltip) {
        setTooltip((prev) =>
          prev ? { ...prev, x: event.clientX, y: event.clientY } : null
        );
      }
    },
    [tooltip]
  );

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
    setHoveredId(null);
  }, []);

  const projectionConfig = useMemo(
    () => ({
      rotate: [-110.4, 7.85, 0] as [number, number, number],
      center: [0, 0] as [number, number],
      scale: 60000,
    }),
    []
  );

  return (
    <div className="relative w-full py-16 px-8 md:py-24 bg-white z-20 overflow-hidden" id="yogyakarta-map">
      {/* Section title */}
      <div className="text-center mb-12">
        <h2 ref={sectionTitleRef} className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight font-jakarta flex flex-wrap gap-x-2 md:gap-x-4 gap-y-1 md:gap-y-2 justify-center">
          {"Five unique districts, each with their own character"
            .split(" ")
            .map((word, index) => (
              <span key={index} className="word inline-block">{word}</span>
            ))}
        </h2>
        <p className="text-base md:text-xl text-gray-500 max-w-[40ch] mx-auto mt-4 leading-relaxed">

        </p>
      </div>

      <div className="flex gap-8 mx-auto items-center flex-col ">

          <SimpleOpacityReveal className="text-lg md:text-2xl text-center text-gray-600 font-medium md:mb-12">
            Yogyakarta comprises five distinct areas, anchored by the historic and cultural heart of Kota Yogyakarta. To the north, Sleman boasts majestic landmarks like Prambanan and Mt. Merapi, while Gunungkidul thrills with rugged beaches and Jomblang Cave. The southern coast of Bantul serves as the region's artistic soul, perfectly complementing the tranquil, nature-focused eco-tourism of Kulon Progo in the west.
          </SimpleOpacityReveal>

        {/* Map */}
        <div className="rounded-3xl overflow-hidden border md:w-[70%] lg:w-[60%] w-full">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={projectionConfig}
            width={1000}
            height={1000}
            style={{ width: "100%", height: "auto" }}
          >
            <>
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const name = geo.properties.name as string;
                    const data = DISTRICT_DATA[name];
                    if (!data) return null;

                    const isHovered = hoveredId === name;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isHovered ? data.hoverColor : data.color}
                        stroke="#595959ff"
                        strokeWidth={3}
                        strokeDasharray="10 5 "
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onMouseEnter={(e) => handleMouseEnter(geo, e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleDistrictClick(name)}
                        style={{
                          default: {
                            outline: "none",
                            transition: "fill 0.3s ease, filter 0.3s ease",
                          },
                          hover: {
                            outline: "none",
                            filter: "brightness(1.15) drop-shadow(0 4px 12px rgba(0,0,0,0.25))",
                          },
                          pressed: {
                            outline: "none",
                            fill: data.hoverColor,
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

            </>
          </ComposableMap>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed z-[9999] pointer-events-none bg-[rgba(28,28,28,0.95)] backdrop-blur-xl text-gray-100 rounded-2xl px-5 py-4 min-w-[240px] max-w-[300px] shadow-2xl border border-white/10 animate-[tooltipFadeIn_0.2s_ease-out] -translate-y-1/2"
          style={{
            left: tooltip.x + 16,
            top: tooltip.y - 8,
          }}
        >
          <h3 className="text-base font-bold text-white m-0 font-jakarta">
            {tooltip.displayName}
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed mb-3">
            {tooltip.description}
          </p>
          <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-3">
            <div className="flex flex-col gap-0.5">
              <span className="text-[0.6rem] uppercase tracking-wider text-gray-500 font-semibold">Capital</span>
              <span className="text-xs font-semibold text-gray-200">
                {tooltip.capital}
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[0.6rem] uppercase tracking-wider text-gray-500 font-semibold">Population</span>
              <span className="text-xs font-semibold text-gray-200">
                {tooltip.population}
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[0.6rem] uppercase tracking-wider text-gray-500 font-semibold">Area</span>
              <span className="text-xs font-semibold text-gray-200">
                {tooltip.area}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* District Detail Modal */}
      {selectedDistrict && DISTRICT_DATA[selectedDistrict] && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          onClick={() => setSelectedDistrict(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" />

          {/* Modal */}
          <div
            className="relative bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-[modalSlideUp_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedDistrict(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors backdrop-blur-sm cursor-pointer"
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Hero image */}
            <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-t-3xl">
              <Image
                src={DISTRICT_DATA[selectedDistrict].image}
                alt={DISTRICT_DATA[selectedDistrict].displayName}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
                  {DISTRICT_DATA[selectedDistrict].area}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white font-jakarta">
                  {DISTRICT_DATA[selectedDistrict].displayName}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed mb-6">
                {DISTRICT_DATA[selectedDistrict].description}
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <span className="block text-[0.65rem] uppercase tracking-wider text-gray-400 font-semibold mb-1">Capital</span>
                  <span className="block text-sm font-bold text-gray-900">{DISTRICT_DATA[selectedDistrict].capital}</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <span className="block text-[0.65rem] uppercase tracking-wider text-gray-400 font-semibold mb-1">Population</span>
                  <span className="block text-sm font-bold text-gray-900">{DISTRICT_DATA[selectedDistrict].population}</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <span className="block text-[0.65rem] uppercase tracking-wider text-gray-400 font-semibold mb-1">Area</span>
                  <span className="block text-sm font-bold text-gray-900">{DISTRICT_DATA[selectedDistrict].area}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedDistrict(null)}
                className="w-full bg-gray-900 hover:bg-black text-white py-3 rounded-xl font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
