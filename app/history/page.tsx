import React from "react";
import Image from "next/image";
import { Clock, Crown, Landmark, BookOpen, Scroll, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Footer } from "../components/Footer";
import HistoryTimeline from "@/components/HistoryTimeline";
import HistoryMusicPlayer from "@/components/HistoryMusicPlayer";

export default function HistoryPage() {
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
                A Living Cultural Legacy
              </h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                Yogyakarta is not merely a city frozen in history. Its past
                lives on through the daily rituals of its people—the dulcet
                tones of the gamelan echoing from the Keraton, the meticulous
                art of batik-making passed down through generations, and the
                grand royal ceremonies that continue to mark the passage of
                time.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Today, as a Special Region of Indonesia, Yogyakarta stands as a
                testament to the enduring power of culture, earning its rightful
                title as the Cultural Capital of Indonesia.
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
