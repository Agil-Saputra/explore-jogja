'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';

const thingsToDoData = [
  {
    image: '/assets/Malioboro-Yogyakarta.jpg',
    title: 'Malioboro Street',
    description:
      "Often described as the heartbeat of Yogyakarta, Malioboro Street is the city's most iconic thoroughfare — a vibrant tapestry of culture, commerce, and heritage that has been...",
  },
  {
    image: '/assets/ramayana-ballet.jpg',
    title: 'Ramayana Ballet',
    description:
      'Witness the spectacular Ramayana Ballet performed against the stunning backdrop of Prambanan Temple. This mesmerizing open-air performance brings ancient Hindu mythology to life through...',
  },
  {
    image: '/assets/gunung-kidul-beach.avif',
    title: 'Gunung Kidul Beaches',
    description:
      'Discover pristine white-sand beaches tucked along the dramatic limestone cliffs of Gunung Kidul. From the famous Timang Beach to the hidden gem of Jogan Waterfall Beach...',
  },
  {
    image: '/assets/keraton.webp',
    title: 'Keraton Palace Visit',
    description:
      "Step into the living royal court of the Yogyakarta Sultanate. The Keraton has been the cultural epicenter of Javanese civilization since 1755, offering visitors a glimpse into the region's...",
  },
  {
    image: '/assets/candi-prambanan.webp',
    title: 'Prambanan Temple',
    description:
      'Marvel at the largest Hindu temple complex in Indonesia, a UNESCO World Heritage Site rising majestically from the Prambanan Plain. Its towering spires and intricate reliefs tell stories of...',
  },
];

export default function ThingsToDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const current = thingsToDoData[activeIndex];

  return (
    <section className="things-to-do-section mt-32 text-black py-20 md:pb-28 ">
      {/* Top header area */}
      <div className="px-8 md:px-12 lg:px-16 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start">
          {/* Left: Big heading */}
          <div className="flex-shrink-0">
            <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold leading-[0.95] font-jakarta text-black ">
              Things To Do
            </h2>
          </div>

          {/* Right: Description */}
          <div className="flex-1 max-w-xl pt-1 md:pt-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
              Discover hidden gems in Yogyakarta
            </h3>
            <p className="text-black text-[15px] md:text-base leading-relaxed">
              From impromptu discoveries to mapped-out adventures, there&apos;s no shortage of things to keep your attention and stretch your imagination across Yogyakarta. Explore the rich history and stunning landscapes that define this beautiful city, from the iconic Malioboro to the sensational southern beaches and everything in between that keeps visitors coming back time after time.
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
                View Details
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={goPrev}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-gray-900 flex items-center justify-center transition-colors group"
                  aria-label="Previous slide"
                >
                  <ArrowLeft size={16} className="text-gray-500 group-hover:text-gray-900 transition-colors" />
                </button>
                <button
                  onClick={goNext}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-gray-900 flex items-center justify-center transition-colors group"
                  aria-label="Next slide"
                >
                  <ArrowRight size={16} className="text-gray-500 group-hover:text-gray-900 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
