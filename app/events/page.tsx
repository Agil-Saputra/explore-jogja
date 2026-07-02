"use client";
import { Footer } from "../components/Footer";
import { MapPin, Clock, Calendar, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLocale } from "@/components/LocaleContext";

export default function EventsPage() {
  const { t } = useLocale();
  return (
    <main className="min-h-screen bg-cream text-[#2B2B2B] pt-32 pb-0 font-jakarta">
      <ScrollReveal>
        {/* Header Section */}
        <section className="px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            {t("events.title")}
          </h1>
          <div className="text-[15px] leading-relaxed text-gray-800">
            <p>{t("events.description")}</p>
          </div>
        </section>

        {/* Events List Segment */}
        <section className="px-8 flex flex-col gap-5 mb-32">
          <EventCard
            day="27"
            monthYear="March 2026"
            weekday="Friday"
            title="Ramayana Ballet at Prambanan"
            location="Prambanan Open Air"
            time="19:30 - 21:30"
          />
          <EventCard
            day="28"
            monthYear="March 2026"
            weekday="Saturday"
            title="Gamelan Orchestra Concert"
            location="Keraton Yogyakarta"
            time="19:00 - 22:00"
          />
          <EventCard
            day="4"
            monthYear="April 2026"
            weekday="Saturday"
            title="ArtJog 2026 Opening"
            location="Jogja National Museum"
            time="10:00 - 22:00"
          />
          <EventCard
            day="25"
            monthYear="April 2026"
            weekday="Saturday"
            title="Men's Choir Spring Concert"
            location="Taman Budaya Jogja"
            time="20:00 - 22:00"
          />
        </section>

        {/* Event Registration Section */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-baseline mb-16">
            <h2 className="text-4xl md:text-[2.75rem] font-bold tracking-tight whitespace-nowrap">
              {t("events.registration.title")}
            </h2>
            <p className="text-[15px] font-medium text-gray-800">
              {t("events.registration.description")}
            </p>
          </div>

          <form className="flex flex-col gap-12 max-w-[900px]">
            {/* Event details */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-8 items-start gap-4">
              <span className="text-[15px] font-bold mt-3">
                {t("events.registration.eventDetails")}
              </span>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Name (Indonesian)"
                  className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none placeholder:text-gray-400 text-[15px]"
                />
                <textarea
                  placeholder="Description (Indonesian)"
                  rows={4}
                  className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none placeholder:text-gray-400 text-[15px] resize-none"
                />
                <input
                  type="text"
                  placeholder="Name (English)"
                  className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none placeholder:text-gray-400 text-[15px]"
                />
                <textarea
                  placeholder="Description (English)"
                  rows={4}
                  className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none placeholder:text-gray-400 text-[15px] resize-none"
                />
                <input
                  type="url"
                  placeholder="Link with more details"
                  className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none placeholder:text-gray-400 text-[15px]"
                />
              </div>
            </div>

            {/* Event begins */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-8 items-start gap-4">
              <span className="text-[15px] font-bold mt-4">
                {t("events.registration.eventBegins")}
              </span>
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="--:--"
                      className="w-full bg-white rounded-xl pl-5 pr-10 py-4 focus:outline-none placeholder:text-gray-400 text-[15px]"
                    />
                    <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-black w-4 h-4" />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="dd/mm/yyyy"
                      className="w-full bg-white rounded-xl pl-5 pr-10 py-4 focus:outline-none placeholder:text-gray-400 text-[15px]"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-black w-4 h-4" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="--:--"
                      className="w-full bg-white rounded-xl pl-5 pr-10 py-4 focus:outline-none placeholder:text-gray-400 text-[15px]"
                    />
                    <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-black w-4 h-4" />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="dd/mm/yyyy"
                      className="w-full bg-white rounded-xl pl-5 pr-10 py-4 focus:outline-none placeholder:text-gray-400 text-[15px]"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-black w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-8 items-start gap-4">
              <span className="text-[15px] font-bold mt-4">
                {t("events.registration.eventImage")}
              </span>
              <div className="w-full bg-white rounded-2xl p-10 flex flex-col items-center justify-center border border-dashed border-gray-200 gap-3">
                <span className="text-[14px] text-gray-500">
                  Drop files here
                </span>
                <button
                  type="button"
                  className="bg-[#EBE9E4] text-[#2B2B2B] px-6 py-2.5 rounded-full text-[14px] font-medium hover:bg-gray-300 transition-colors"
                >
                  {t("events.registration.chooseImage")}
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-8 items-center gap-4">
              <span className="text-[15px] font-bold">
                {t("events.registration.eventLocation")}
              </span>
              <div className="relative">
                <select className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none text-gray-500 text-[15px] appearance-none cursor-pointer">
                  <option value="">
                    {t("events.registration.eventLocation")}
                  </option>
                  <option value="prambanan">Prambanan</option>
                  <option value="keraton">Keraton</option>
                  <option value="jnm">Jogja National Museum</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-black w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-8 items-start gap-4">
              <span className="text-[15px] font-bold mt-4">
                {t("events.registration.contactInfo")}
              </span>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder={t("events.registration.namePlaceholder")}
                  className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none placeholder:text-gray-400 text-[15px]"
                />
                <input
                  type="email"
                  placeholder={t("events.registration.emailPlaceholder")}
                  className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none placeholder:text-gray-400 text-[15px]"
                />
                <input
                  type="tel"
                  placeholder={t("events.registration.phonePlaceholder")}
                  className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none placeholder:text-gray-400 text-[15px]"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-8 items-start gap-4 mt-4">
              <div className="hidden md:block"></div>
              <div className="flex justify-center md:justify-start">
                <button
                  type="button"
                  className="bg-[#2B2B2B] text-white px-10 py-3.5 rounded-full text-[15px] font-bold hover:bg-black transition-colors w-[150px] mx-auto md:mx-0"
                >
                  {t("events.registration.send")}
                </button>
              </div>
            </div>
          </form>
        </section>
      </ScrollReveal>
      <Footer />
    </main>
  );
}

function EventCard({
  day,
  monthYear,
  weekday,
  title,
  location,
  time,
}: {
  day: string;
  monthYear: string;
  weekday: string;
  title: string;
  location: string;
  time: string;
}) {
  const { t } = useLocale();
  return (
    <div className="bg-[#EBE9E4] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-sm transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-14 w-full">
        {/* Date block */}
        <div className="flex flex-col min-w-[100px]">
          <span className="text-5xl font-bold text-[#2B2B2B] leading-none mb-2">
            {day}
          </span>
          <span className="text-[12px] font-semibold text-gray-600 uppercase tracking-widest leading-tight">
            {monthYear}
          </span>
          <span className="text-[12px] text-gray-500 capitalize">
            {weekday}
          </span>
        </div>

        {/* Info block */}
        <div className="flex flex-col w-full">
          <h3 className="text-2xl font-bold text-[#2B2B2B] mb-4">{title}</h3>
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-white rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm border border-black/5">
              <MapPin size={14} className="text-black" />
              <span className="text-[13px] font-semibold text-black">
                {location}
              </span>
            </div>
            <div className="bg-white rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm border border-black/5">
              <Clock size={14} className="text-black" />
              <span className="text-[13px] font-semibold text-black">
                {time}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action block */}
      <div className="shrink-0 mt-2 md:mt-0">
        <button className="bg-[#D8D6CD] text-[#2B2B2B] px-6 py-2.5 rounded-full text-[13px] font-bold hover:bg-[#C8C6BD] transition-colors w-max">
          {t("events.readMore")}
        </button>
      </div>
    </div>
  );
}
