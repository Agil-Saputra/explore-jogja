"use client";
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Footer } from "../components/Footer";
import HistoryTimeline from "@/components/HistoryTimeline";
import HistoryMusicPlayer from "@/components/HistoryMusicPlayer";
import { useLocale } from "@/components/LocaleContext";

export default function HistoryPage() {
  const { t } = useLocale();
  return (
    <main className="min-h-screen bg-cream text-gray-900">
      <ScrollReveal>
        {/* Timeline Section */}
        <div className="w-full z-[99]">
          <HistoryTimeline />
        </div>

        {/* Cultural Legacy Section */}
        <section className="px-8 py-24 bg-white z-[99999]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 font-jakarta">
                {t("history.legacyTitle")}
              </h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                {t("history.legacyP1")}
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                {t("history.legacyP2")}
              </p>
            </div>
          </div>
        </section>

        <HistoryMusicPlayer />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
