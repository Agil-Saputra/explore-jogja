"use client";

import { MapPin, Clock } from "lucide-react";
import { useLocale } from "@/components/LocaleContext";
import type { ContentfulEvent } from "@/lib/contentful";

interface EventsClientProps {
  events: ContentfulEvent[];
}

// ── Date helpers ──────────────────────────────────────────────────────────────
function parseEventDate(isoDate: string) {
  const d = new Date(isoDate);
  const day = d.getUTCDate().toString();
  const monthYear = d.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const weekday = d.toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: "UTC",
  });
  return { day, monthYear, weekday };
}

function formatTimeRange(startDate: string, endDate: string | null): string {
  const formatTime = (iso: string) =>
    new Date(iso).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "UTC",
    });

  if (!endDate) return formatTime(startDate);
  return `${formatTime(startDate)} - ${formatTime(endDate)}`;
}

// ── Main client component ─────────────────────────────────────────────────────
export default function EventsClient({ events }: EventsClientProps) {
  if (events.length === 0) {
    return (
      <section className="px-8 flex flex-col gap-5 mb-32">
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <p className="text-lg font-medium">No upcoming events</p>
          <p className="text-sm mt-1">Check back soon for new events</p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-8 flex flex-col gap-5 mb-32">
      {events.map((event) => {
        const { day, monthYear, weekday } = parseEventDate(event.startDate);
        const time = formatTimeRange(event.startDate, event.endDate);
        return (
          <EventCard
            key={event.id}
            day={day}
            monthYear={monthYear}
            weekday={weekday}
            title={event.title}
            location={event.location}
            time={time}
            link={event.link}
          />
        );
      })}
    </section>
  );
}

// ── Event Card ────────────────────────────────────────────────────────────────
function EventCard({
  day,
  monthYear,
  weekday,
  title,
  location,
  time,
  link,
}: {
  day: string;
  monthYear: string;
  weekday: string;
  title: string;
  location: string;
  time: string;
  link: string | null;
}) {
  const { t } = useLocale();

  const CardWrapper = link
    ? ({ children }: { children: React.ReactNode }) => (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#EBE9E4] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-sm transition-shadow"
        >
          {children}
        </a>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <div className="bg-[#EBE9E4] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-sm transition-shadow">
          {children}
        </div>
      );

  return (
    <CardWrapper>
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-14 w-full">
        {/* Date block */}
        <div className="flex flex-col min-w-[100px]">
          <span className="text-5xl font-bold text-[#2B2B2B] leading-none mb-2">
            {day}
          </span>
          <span className="text-[12px] font-semibold text-gray-600 uppercase tracking-widest leading-tight">
            {monthYear}
          </span>
          <span className="text-[12px] text-gray-500 capitalize">{weekday}</span>
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
              <span className="text-[13px] font-semibold text-black">{time}</span>
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
    </CardWrapper>
  );
}
