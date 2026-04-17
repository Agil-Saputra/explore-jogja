import React from 'react';
import Link from 'next/link';
import { Bed, Navigation, MapPin, Calendar, Utensils, Car, Waves, Bird, Footprints } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { Footer } from '../components/Footer';
import { SlidingImageReveal } from '../components/RevealElements';
import AttractionsSlider from '@/components/AttractionsSlider';
import ThingsToDo from '@/components/ThingsToDo';

export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-cream text-gray-900 pt-28 md:pt-36">
      <ScrollReveal>
        {/* 1. Discover Section */}
        <section className="px-8 mb-32 flex flex-col md:flex-row gap-8 lg:gap-16 ">
          <div className="flex-1 flex flex-col pt-8 justify-between flex-start">
            <h1 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight font-jakarta">Discover Yogyakarta</h1>

            <div>
              <div className="flex flex-col items-center justify-end mb-16 relative px-4 absolute -bottom-10 right-0">
                <p className="font-caveat text-2xl max-w-lg text-center uppercase leading-snug font-semibold text-gray-800">
                  Ancient heritage, breathtaking natural wonders, or traditional treats. Jogja lets you see it all.
                </p>
                {/* Custom Arrow */}
                <div className=" transform translate-y-2 translate-x-4 scale-75">
                  <svg width="60" height="60" viewBox="0 0 39 47" fill="none" className="text-black">
                    <path d="M1 1C1.0221 1.0048 1.15377 1.09601 2.25615 2.07106C3.24706 2.94752 5.07851 4.6386 6.181 5.6196C7.28349 6.60061 7.59244 6.83044 8.60478 7.44622C9.61712 8.062 11.3235 9.05677 13.1657 10.0303C15.008 11.0039 16.9344 11.9261 18.0282 12.4609C19.6587 13.2582 20.0491 13.6233 20.8916 14.1554C21.6933 14.6616 23.0121 15.6562 25.1593 17.3848C25.6892 17.8114 26.2828 18.6508 27.2054 20.0344C27.9993 21.2251 28.6333 22.9294 29.1927 24.6357C29.4338 25.3708 29.7807 26.1735 30.2183 27.3493C30.4414 28.0736 30.6202 28.8761 30.9493 31.9988C31.1571 34.5705 31.4478 39.1464 31.7094 43.8846" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M27.0654 40.3569C27.0772 40.4347 27.2017 40.7186 27.8046 41.7269C28.0674 42.1664 28.7262 42.8549 29.5 43.5C30.2559 44.1302 30.5491 44.5781 30.8123 44.9415C31.0128 45.2181 31.2983 45.4115 31.5 45.5C31.6455 45.5639 32.2956 45.1533 33.539 44.3478C34.2124 43.9117 35.0522 43.5506 35.5806 43.2676C36.6982 42.6693 37.1219 42.2697 37.3876 42.0628C37.4383 42.0281 37.4893 41.9934 37.5245 41.9461C37.5596 41.8987 37.5772 41.8399 37.5953 41.7793" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/discover/accommodation" className="flex items-center gap-2 bg-[#EFEFEF] hover:bg-gray-200 rounded-lg px-4 py-2.5 transition-colors font-medium text-[15px]">
                  <Bed size={18} /> Accommodation
                </Link>
                <Link href="/discover/activities" className="flex items-center gap-2 bg-[#EFEFEF] hover:bg-gray-200 rounded-lg px-4 py-2.5 transition-colors font-medium text-[15px]">
                  <Navigation size={18} /> Activities
                </Link>
                <Link href="/discover/top-attractions" className="flex items-center gap-2 bg-[#EFEFEF] hover:bg-gray-200 rounded-lg px-4 py-2.5 transition-colors font-medium text-[15px]">
                  <MapPin size={18} fill="black" /> Top Attractions
                </Link>
                <Link href="/discover/events" className="flex items-center gap-2 bg-[#EFEFEF] hover:bg-gray-200 rounded-lg px-4 py-2.5 transition-colors font-medium text-[15px]">
                  <Calendar size={18} /> Events
                </Link>
                <Link href="/discover/food-and-drink" className="flex items-center gap-2 bg-[#EFEFEF] hover:bg-gray-200 rounded-lg px-4 py-2.5 transition-colors font-medium text-[15px]">
                  <Utensils size={18} fill="black" /> Food & Drink
                </Link>
                <Link href="/discover/getting-around" className="flex items-center gap-2 bg-[#EFEFEF] hover:bg-gray-200 rounded-lg px-4 py-2.5 transition-colors font-medium text-[15px]">
                  <Car size={18} fill="black" /> Getting Around
                </Link>
                <Link href="/discover/trekking-and-hiking" className="flex items-center gap-2 bg-[#EFEFEF] hover:bg-gray-200 rounded-lg px-4 py-2.5 transition-colors font-medium text-[15px]">
                  <Footprints size={18} /> Trekking and Hiking
                </Link>
                <Link href="/discover/beaches" className="flex items-center gap-2 bg-[#EFEFEF] hover:bg-gray-200 rounded-lg px-4 py-2.5 transition-colors font-medium text-[15px]">
                  <Waves size={18} /> Beaches
                </Link>
                <Link href="/discover/aesthetic-cafes" className="flex items-center gap-2 bg-[#EFEFEF] hover:bg-gray-200 rounded-lg px-4 py-2.5 transition-colors font-medium text-[15px]">
                  <Bird size={18} fill="black" /> Aesthetic Cafes
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full rounded-[1.5rem] overflow-hidden ">


            <SlidingImageReveal className="w-full h-full rounded-[1.5rem] overflow-hidden rounded-xl ">
              <video src="/assets/jogja-aerial-view.mp4" className='md:min-h-[700px] object-cover' autoPlay loop muted />
            </SlidingImageReveal>
          </div>
        </section>

        {/* 2. Attractions & landmarks Section */}
        <AttractionsSlider />

        {/* Things to do  */}
        <ThingsToDo />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
