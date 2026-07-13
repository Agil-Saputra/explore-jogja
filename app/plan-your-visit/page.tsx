"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { Footer } from "../components/Footer";
import { useLocale } from "@/components/LocaleContext";
import PlanHistoryModal from "@/components/PlanHistoryModal";
import { getPlans, type SavedPlan } from "@/lib/planStorage";

export default function PlanYourVisit() {
  const { t } = useLocale();
  const [showHistory, setShowHistory] = useState(false);
  const [plans, setPlans] = useState<SavedPlan[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setPlans(getPlans());
    }, 0);
  }, []);

  console.log(plans.length);

  return (
    <main className="min-h-screen bg-cream text-gray-900 pt-28 md:pt-48 pb-0 font-jakarta">
      <ScrollReveal>
        {/* Hero Section */}
        <section
          id="plan-visit-hero"
          className="px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start "
        >
          <div className="flex-1 flex flex-col justify-between flex-start h-full">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight font-jakarta">
                {t("planYourVisit.title")}
              </h1>
              <p className="text-[17px] text-gray-700 leading-relaxed max-w-[56ch]">
                {t("planYourVisit.description")}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center mb-16 relative px-4 absolute -bottom-10 right-0">
                <p className="font-caveat text-3xl max-w-lg text-center uppercase leading-snug font-semibold text-gray-800">
                  {t("planYourVisit.decorativeText")}
                </p>
                {/* Custom Arrow */}
                <div className=" transform translate-y-2 translate-x-4 scale-75">
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

              <div className="flex flex-wrap gap-3 mt-4">
                <Link
                  id="plan-create-btn"
                  href="/plan-your-visit/create"
                  className="w-fit bg-[#2C2C2C] hover:bg-black text-white px-8 py-3 rounded-full font-medium transition-colors inline-block"
                >
                  {t("planYourVisit.createTripPlan")}
                </Link>
                {plans.length > 0 && (
                  <button
                    id="plan-history-btn"
                    onClick={() => setShowHistory(true)}
                    className="flex items-center gap-2 w-fit border-2 border-gray-200 hover:border-gray-400 bg-white/70 hover:bg-white text-gray-700 hover:text-gray-900 px-8 py-3 rounded-full font-medium transition-all duration-200 backdrop-blur-sm"
                  >
                    {t("planHistory.historyModal.openHistory")}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column (Stacked Images) */}
          <div className="relative w-full aspect-[4/3] lg:h-[650px] flex items-center justify-center">
            {/* Image 1 — top left, tilted left */}
            <div
              className="absolute rounded-2xl overflow-hidden shadow-xl"
              style={{
                width: "60%",
                aspectRatio: "4/3",
                top: "2%",
                left: "2%",
                transform: "rotate(-6deg)",
                zIndex: 1,
              }}
            >
              <Image
                src="/assets/tamansari.jpg"
                alt="Tugu Yogyakarta aerial view"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Image 2 — middle right, tilted right */}
            <div
              className="absolute rounded-2xl overflow-hidden shadow-xl"
              style={{
                width: "58%",
                aspectRatio: "16/10",
                top: "22%",
                right: "0%",
                transform: "rotate(4deg)",
                zIndex: 2,
              }}
            >
              <Image
                src="/assets/ramayana-ballet.jpg"
                alt="Ramayana Ballet performance"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 3 — bottom left, tilted left (foreground) */}
            <div
              className="absolute rounded-2xl overflow-hidden shadow-2xl"
              style={{
                width: "62%",
                aspectRatio: "4/3",
                bottom: "2%",
                left: "5%",
                transform: "rotate(4deg)",
                zIndex: 3,
              }}
            >
              <Image
                src="/assets/Malioboro-Yogyakarta.jpg"
                alt="Malioboro Street atmosphere"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>


        {/* Getting Around Section */}
        <section
          id="plan-visit-getting-around"
          className="px-8 py-16 mt-32"
        >
          {/* Top area: Text left + Image right (like reference) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column (Text + Decorative + Button) */}
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden lg:h-[550px]"
              style={{ clipPath: "inset(0 round 2rem)" }}
            >
              <Image
                src="/assets/trans-jogja-bus.png"
                alt="Trans Jogja Bus"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-6 text-white text-xs opacity-90 drop-shadow-md">
                © Trans Jogja
              </div>
            </div>

            {/* Right Column (Bus Image) */}
            <div className="flex flex-col">
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight mb-8 leading-[1.1]">
                {t("planYourVisit.gettingAroundTitle")}
              </h2>
              <p className="text-[17px] text-gray-700 leading-relaxed mb-10 max-w-[50ch]">
                {t("planYourVisit.gettingAroundDesc")}
              </p>

              {/* Decorative handwritten text + arrow */}
              <div className="flex flex-col items-center justify-center mb-2">
                <p className="font-caveat text-2xl max-w-md text-center uppercase leading-snug font-semibold text-gray-800">
                  {t("planYourVisit.gettingAroundDecorativeText")}
                </p>
                <div className="transform translate-y-2 translate-x-4 scale-75">
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

              {/* Bus Schedule Button */}
              <div className="flex justify-center">
                <a href="https://dishub.jogjaprov.go.id/trans-jogja" className="flex items-center gap-3 bg-[#2B2B2B] text-white px-8 py-3.5 rounded-full hover:bg-black transition-colors font-medium text-[15px]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {t("planYourVisit.busSchedule")}
                </a>
              </div>
            </div>


          </div>

        </section>
      </ScrollReveal>
      <Footer />

      <PlanHistoryModal
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
      />
    </main>
  );
}
