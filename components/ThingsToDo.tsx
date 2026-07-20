"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import { useLocale } from "@/components/LocaleContext";

const thingsToDoData = [
  {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Makam_Raja_Mataram_Kotagede.jpg",
    title: "Jogja Heritage Track & Kotagede Walk",
    description:
      "Hop on the free electric Jogja Heritage Track bus along the philosophical axis linking Tugu Monument to the Kraton, then wander into Kotagede's old silver district on foot. Travelers who've done the walking-tour version rave about getting genuinely lost in the kampung's narrow alleys with a local guide who treats it more like showing a friend around than reciting a script...",
  },
  {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Disaster_tourism_merapi.jpg",
    title: "Merapi Lava Tour by Jeep",
    description:
      "Climb into a vintage open-top Willys jeep and get rattled up the ash-grey slopes of an active volcano before sunrise. Reviewers consistently describe it as dusty, bumpy, and genuinely tiring on the body — and then say watching the sunrise from above the clouds at the crater's edge made every bruise worth it...",
  },
  {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pindul_Cave,_Indonesia.JPG",
    title: "Cave Tubing at Goa Pindul",
    description:
      "Float on an inner tube through a 300-metre limestone cave on the back of an underground river, guided by a local who literally paddles you along with his legs. People who've tried it talk about drifting past ancient stalactites in near-total darkness before the guide cuts the lights completely for a moment of silence...",
  },
  {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kotagede_silversmiths.jpg",
    title: "Kotagede Silversmithing Workshop",
    description:
      "Slip into the backstreets of Kotagede to sit with a family of silversmiths and hammer, shape, and polish your own ring or pendant from 925 silver. Visitors who've taken the short course describe it less as a demonstration and more as being handed the tools and guided through nearly every step yourself...",
  },
  {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tebing_Breksi_in_the_afternoon.jpg",
    title: "Tebing Breksi Limestone Cliffs",
    description:
      "Climb the carved terraces of a former volcanic-breccia quarry turned open-air amphitheater on Yogyakarta's eastern edge. What was once a mining site is now known among locals as one of the best free sunset spots around, with hand-cut stone reliefs and sweeping views over the Prambanan plain...",
  },
];
export default function ThingsToDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const { t } = useLocale();

  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const current = thingsToDoData[activeIndex];

  return (
    <section className="things-to-do-section md:mt-32  text-black py-20 md:pb-28 ">
      {/* Top header area */}
      <div className="px-8 md:px-12 lg:px-16 mb-12 md:mb-16">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-24 items-start">
          {/* Left: Big heading */}
          <div className="flex-shrink-0">
            <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold leading-[0.95] font-jakarta text-black ">
              {t("thingsToDo.title")}
            </h2>
          </div>

          {/* Right: Description */}
          <div className="flex-1 max-w-xl pt-1 md:pt-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
              {t("thingsToDo.subtitle")}
            </h3>
            <p className="text-black text-[15px] md:text-base leading-relaxed">
              {t("thingsToDo.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Image slider area */}
      <div className="px-8 md:px-12 lg:px-16 relative">
        <div className="relative rounded-2xl overflow-hidden">
          <Swiper
            modules={[Navigation, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
            }}
            slidesPerView={1}
            speed={600}
            className="things-swiper"
          >
            {thingsToDoData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full aspect-[16/8] md:aspect-[16/7] min-h-[400px] md:min-h-[500px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority={idx === 0}
                  />
                  {/* Subtle overlay for legibility at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Info card overlay - bottom right */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10 bg-white text-gray-900 rounded-xl shadow-2xl p-6 md:p-8 w-[85%] sm:w-[60%] md:w-[380px] lg:w-[420px]">
            <h4 className="text-xl md:text-2xl font-bold mb-2 font-jakarta">
              {current.title}
            </h4>
            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-5 line-clamp-3">
              {current.description}
            </p>
            <div className="flex items-center justify-between">
              <button className="bg-gray-900 hover:bg-black text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors">
                {t("thingsToDo.viewDetails")}
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={goPrev}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-gray-900 flex items-center justify-center transition-colors group"
                  aria-label="Previous slide"
                >
                  <ArrowLeft
                    size={16}
                    className="text-gray-500 group-hover:text-gray-900 transition-colors"
                  />
                </button>
                <button
                  onClick={goNext}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-gray-900 flex items-center justify-center transition-colors group"
                  aria-label="Next slide"
                >
                  <ArrowRight
                    size={16}
                    className="text-gray-500 group-hover:text-gray-900 transition-colors"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
