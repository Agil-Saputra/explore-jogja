'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

const tabs = ['Attractions', 'Landmarks'];

const attractionsData = [
  {
    image: '/assets/aerial-view-of-the-tugu-jogja.jpeg',
    title: 'Tugu Jogja, A Timeless Icon',
  },
  {
    image: '/assets/candi-prambanan.webp',
    title: 'Prambanan Temple Complex',
  },
  {
    image: '/assets/keraton.webp',
    title: 'The Royal Keraton Palace',
  },
  {
    image: '/assets/gunung-kidul-beach.avif',
    title: 'Gunung Kidul Coastal Wonders',
  },
  {
    image: '/assets/Malioboro-Yogyakarta.jpg',
    title: 'Malioboro Street Heritage',
  },
  {
    image: '/assets/ramayana-ballet.jpg',
    title: 'Ramayana Ballet Performance',
  },
  {
    image: '/assets/the-kraton-of-yogyakarta.jpg',
    title: 'The Kraton of Yogyakarta',
  },
  {
    image: '/assets/prambanan.webp',
    title: 'Ancient Hindu Legacy',
  },
];

const landmarksData = [
  {
    image: '/assets/keraton-2.png',
    title: 'Keraton Ngayogyakarta',
  },
  {
    image: '/assets/Yogyakarta_Indonesia_Tugu-Yogyakarta-01.jpg',
    title: 'Tugu Monument at Dawn',
  },
  {
    image: '/assets/main-image.webp',
    title: 'Historic City Center',
  },
  {
    image: '/assets/prambanan.webp',
    title: 'Prambanan at Sunset',
  },
];

export default function AttractionsSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const swiperRef = useRef<SwiperType | null>(null);

  const data = activeTab === 0 ? attractionsData : landmarksData;

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    setCurrentPage(1);
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    // Calculate which "page" we're on based on the active index
    const slidesPerView = Math.floor(swiper.params.slidesPerView as number) || 4;
    const page = Math.floor(swiper.activeIndex / slidesPerView) + 1;
    const total = Math.ceil(data.length / slidesPerView);
    setCurrentPage(Math.min(page, total));
    setTotalPages(total);
  };

  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <section className="mt-64 py-32 bg-white">
      {/* Header */}
      <div className="px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Title + View All */}
          <div className="flex items-end gap-6 relative">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-jakarta text-gray-900">
              Attractions & Landmarks
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-1 border-2 border-gray-900 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-colors mb-1 whitespace-nowrap"
            >
              View All
            </a>
            <div className="flex flex-col items-start justify-end mb-16 px-4 absolute -bottom-10 -right-54">
              <p className="font-caveat text-2xl text-center uppercase leading-snug font-semibold text-gray-800 max-w-[20ch]">
                See
                all
                attractions
                and
                landmarks
                we
                have
                to
                offer
              </p>
              {/* Custom Arrow */}
              <div className=" transform translate-y-2 translate-x-4 scale-75 rotate-[90deg]">
                <svg width="60" height="60" viewBox="0 0 39 47" fill="none" className="text-black">
                  <path d="M1 1C1.0221 1.0048 1.15377 1.09601 2.25615 2.07106C3.24706 2.94752 5.07851 4.6386 6.181 5.6196C7.28349 6.60061 7.59244 6.83044 8.60478 7.44622C9.61712 8.062 11.3235 9.05677 13.1657 10.0303C15.008 11.0039 16.9344 11.9261 18.0282 12.4609C19.6587 13.2582 20.0491 13.6233 20.8916 14.1554C21.6933 14.6616 23.0121 15.6562 25.1593 17.3848C25.6892 17.8114 26.2828 18.6508 27.2054 20.0344C27.9993 21.2251 28.6333 22.9294 29.1927 24.6357C29.4338 25.3708 29.7807 26.1735 30.2183 27.3493C30.4414 28.0736 30.6202 28.8761 30.9493 31.9988C31.1571 34.5705 31.4478 39.1464 31.7094 43.8846" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M27.0654 40.3569C27.0772 40.4347 27.2017 40.7186 27.8046 41.7269C28.0674 42.1664 28.7262 42.8549 29.5 43.5C30.2559 44.1302 30.5491 44.5781 30.8123 44.9415C31.0128 45.2181 31.2983 45.4115 31.5 45.5C31.6455 45.5639 32.2956 45.1533 33.539 44.3478C34.2124 43.9117 35.0522 43.5506 35.5806 43.2676C36.6982 42.6693 37.1219 42.2697 37.3876 42.0628C37.4383 42.0281 37.4893 41.9934 37.5245 41.9461C37.5596 41.8987 37.5772 41.8399 37.5953 41.7793" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center gap-3 text-gray-900 font-semibold text-sm self-end">
            <button
              onClick={goPrev}
              className="text-xl font-bold hover:opacity-60 transition-opacity"
              aria-label="Previous"
            >
              «
            </button>
            <span className="tabular-nums tracking-wide">
              {String(currentPage).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
            </span>
            <button
              onClick={goNext}
              className="text-xl font-bold hover:opacity-60 transition-opacity"
              aria-label="Next"
            >
              »
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mt-6 border-b border-gray-200">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              onClick={() => handleTabChange(idx)}
              className={`pb-3 text-base font-semibold transition-all relative ${activeTab === idx
                ? 'text-gray-900'
                : 'text-gray-400 hover:text-gray-600'
                }`}
            >
              {tab}
              {activeTab === idx && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gray-900 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="pl-8">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // Initial page calculation
            const spv = Math.floor(swiper.params.slidesPerView as number) || 4;
            setTotalPages(Math.ceil(data.length / spv));
          }}
          onSlideChange={handleSlideChange}
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.2 },
            868: { slidesPerView: 3.2 },
            1100: { slidesPerView: 4 },
          }}
          className="attractions-swiper"
          key={activeTab}
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[3/4]">
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 868px) 45vw, (max-width: 1100px) 30vw, 25vw"
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
