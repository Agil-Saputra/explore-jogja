"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SlidingImageReveal } from "../app/components/RevealElements";

import { useLocale } from "@/components/LocaleContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const timelineData = [
  {
    year: "1755",
    id: "giyanti",
    images: [
      "/assets/history/perjanjian-giyanti.jpg",
      "/assets/sultan-hb-i.jpg"
    ]
  },
  {
    year: "1756",
    id: "pembangunanKeraton",
    images: [
      "/assets/history/pembangunan-keraton.jpg",
      "/assets/tugu-pal-putih.jpg"
    ]
  },
  {
    year: "1812",
    id: "gegerSepehi",
    images: [
      "/assets/history/geger-sepehi.webp"
    ]
  },
  {
    year: "1825",
    id: "perangDiponegoro",
    images: [
      "/assets/history/perang-jawa.jpg",
      "/assets/java-war.jpg"
    ]
  },
  {
    year: "1945",
    id: "amanat1945",
    images: [
      "/assets/history/jogja-1945.jpg",
      "/assets/amanat-1945.jpg"
    ]
  },
  {
    year: "1946",
    id: "ibukotaRI",
    images: [
      "/assets/history/jogja-ibukota.webp",
      "/assets/stasiun-tugu.jpg"
    ]
  },
  {
    year: "1949",
    id: "seranganUmum",
    images: [
      "/assets/history/serangan-umum.jpg",
      "/assets/monumen-so-1-maret.jpg"
    ]
  },
  {
    year: "1950",
    id: "pembentukanDIY",
    images: [
      "/assets/lambang-diy.jpg"
    ]
  },
  {
    year: "2006",
    id: "gempaBumi",
    images: [
      "/assets/history/gempa-2006.jpg",
      "/assets/candi-prambanan-damage.jpg"
    ]
  },
  {
    year: "2012",
    id: "uuKeistimewaan",
    images: [
      "/assets/history/uu-keistimewaan.webp",
      "/assets/kraton-modern.jpg"
    ]
  },
  {
    year: "2023",
    id: "warisanDunia",
    images: [
      "/assets/sumbu-filosofi-jogja.jpg",
      "/assets/unesco-heritage.jpg"
    ]
  },
  {
    year: "2026",
    id: "hubKreatif",
    images: [
      "/assets/coworking-space-2026.jpg",
      "/assets/tech-community-jogja.jpg"
    ]
  }
];


// Helper to dynamically generate a perfectly sweeping S-Curve based on items length
const generatePath = (count: number) => {
  let d = `M 500 0\n`;
  for (let i = 0; i < count; i++) {
    const startY = i * 1000;
    const endY = startY + 1000;
    const isEven = i % 2 === 0;
    const cpX = isEven ? 900 : 100;
    // Curves to the right for even indexes, left for odd
    d += `C ${cpX} ${startY + 200}, ${cpX} ${startY + 800}, 500 ${endY}\n`;
  }
  return d;
};

export default function HistoryTimeline() {
  const { t } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const pathD = generatePath(timelineData.length);
  const viewBoxHeight = timelineData.length * 1000;
  const viewBox = `0 0 1000 ${viewBoxHeight}`;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 3. Pop in the checkpoint dots when the line reaches them
      dotRefs.current.forEach((dot) => {
        if (!dot) return;
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: dot,
              start: "center 65%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-cream overflow-hidden py-10"
    >
      {/* Background S-Curve SVG */}
      <div className="absolute top-0 bottom-0 left-0 right-0 z-0 pointer-events-none">
        <svg
          viewBox={viewBox}
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d={pathD}
            stroke="#2c2c2cff"
            strokeWidth="4"
            strokeDasharray="12 12" // Dashed line effect
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Timeline Checkpoints */}
      <div className="relative z-10 w-full flex flex-col pointer-events-none">
        {timelineData.map((data, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={data.year}
              className="relative h-[100vh] w-full flex items-center px-4 md:px-12 lg:px-24"
            >
              {/* Alternating Layout Wrapper */}
              <div
                className={`w-full flex flex-col md:flex-row items-center ${isEven ? "md:justify-start" : "md:justify-end"}`}
              >
                {/* The Checkpoint Dot */}
                <div
                  ref={(el) => {
                    if (el) dotRefs.current[i] = el;
                  }}
                  className="absolute top-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-black rounded-full border-4 border-[#F5F1E5] shadow-md z-20"
                  style={{
                    // Align roughly with the SVG control points peak (80% and 20%)
                    left: isEven ? "80%" : "20%",
                    transform: "translate(-50%, -50%)",
                  }}
                />

                {/* The Card */}
                <div
                  className={`w-full max-w-xl pointer-events-auto rounded-xl sticky top-24 shadow-2xl ${isEven ? "md:mr-auto" : "md:ml-auto"}`}
                  // Limit the card to roughly 50% width on larger screens to avoid the SVG path
                  style={{ maxWidth: "calc(50% - 3rem)" }}
                >
                  <SlidingImageReveal className="w-full rounded-xl">
                    <div className="w-full flex flex-col bg-white/90 backdrop-blur-sm p-6 md:p-8 border border-white/40">
                      {/* Bold Year & Label */}
                      <div className="flex items-baseline gap-4 mb-4 border-b border-gray-100 pb-4">
                        <span className="text-5xl md:text-7xl font-bold text-black font-caveat leading-none tracking-tighter">
                          {data.year}
                        </span>
                      </div>

                      {/* High-res image placeholder */}
                      <div className="relative w-full aspect-video overflow-hidden shadow-inner group cursor-pointer">
                        <Image
                          src={data.images[0]}
                          alt={t(`history.timeline.${data.id}.title`)}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>


                      {/* Title and Description */}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-caveat font-bold text-gray-900 mb-3 mt-4">
                          {t(`history.timeline.${data.id}.title`)}
                        </h3>
                        <p className="text-gray-600 leading-relaxed md:text-lg">
                          {t(`history.timeline.${data.id}.description`)}
                        </p>
                      </div>
                    </div>
                  </SlidingImageReveal>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
