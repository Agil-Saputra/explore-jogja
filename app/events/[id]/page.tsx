import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ArrowLeft, Calendar, Clock } from "lucide-react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { getEventById, getEvents } from "@/lib/contentful";
import { Footer } from "@/app/components/Footer";
import type { Metadata } from "next";
import type { Options } from "@contentful/rich-text-react-renderer";

/* ── Rich text render options ────────────────────────────────────────────── */
const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-[15px] leading-relaxed text-[#2B2B2B]/80 mb-4 last:mb-0">
        {children}
      </p>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-xl font-bold text-[#2B2B2B] mt-6 mb-2">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-lg font-semibold text-[#2B2B2B] mt-4 mb-2">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc list-inside text-[15px] text-[#2B2B2B]/80 mb-4 space-y-1">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal list-inside text-[15px] text-[#2B2B2B]/80 mb-4 space-y-1">
        {children}
      </ol>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri as string}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 hover:text-[#2B2B2B] transition-colors"
      >
        {children}
      </a>
    ),
  },
};

/* ── Static params (optional ISR/SSG) ──────────────────────────────────── */
export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((e) => ({ id: e.id }));
}

/* ── Metadata ────────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const event = await getEventById(id);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} — Explore Jogja`,
    description: `Join us for ${event.title} in Yogyakarta.`,
  };
}

/* ── Helpers ──────────────────────────────────────────────────────────────── */
function formatFullDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  });
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) notFound();

  const dateLabel = formatFullDate(event.startDate);
  const startTime = formatTime(event.startDate);
  const endTime = event.endDate ? formatTime(event.endDate) : null;
  const timeLabel = endTime ? `${startTime} – ${endTime}` : startTime;

  return (
    <main className="min-h-screen bg-[#F4F2ED] text-[#2B2B2B] font-jakarta">
      {/* ── Back link ─────────────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 pt-28 pb-6">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-[#2B2B2B]/70 hover:text-[#2B2B2B] transition-colors group"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          All Events
        </Link>
      </div>

      {/* ── Hero section ──────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left — info */}
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-5">
            {event.title}
          </h1>

          {/* Date */}
          <p className="text-[15px] font-medium text-[#2B2B2B]/70 mb-8">
            {dateLabel}
          </p>

          {/* Pill badges */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {event.location && (
              <span className="inline-flex items-center gap-1.5 bg-white border border-black/8 rounded-full px-4 py-1.5 text-[13px] font-semibold text-[#2B2B2B] shadow-sm">
                <MapPin size={13} className="shrink-0" />
                {event.location}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 bg-white border border-black/8 rounded-full px-4 py-1.5 text-[13px] font-semibold text-[#2B2B2B] shadow-sm">
              <Clock size={13} className="shrink-0" />
              {timeLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white border border-black/8 rounded-full px-4 py-1.5 text-[13px] font-semibold text-[#2B2B2B] shadow-sm">
              <Calendar size={13} className="shrink-0" />
              {dateLabel}
            </span>
          </div>

          {/* Description — Rich Text or fallback */}
          <div className="mb-10 max-w-[480px]">
            {event.description ? (
              documentToReactComponents(event.description, richTextOptions)
            ) : (
              <p className="text-[15px] font-medium text-[#2B2B2B]">
                See more info
              </p>
            )}
          </div>

          {/* CTA button */}
          {event.link && (
            <div>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2B2B2B] text-white rounded-full px-7 py-3.5 text-[14px] font-semibold hover:bg-black transition-colors"
              >
                More information
              </a>
            </div>
          )}
        </div>

        {/* Right — image */}
        <div className="w-full aspect-[4/3] md:aspect-auto md:h-[520px] rounded-2xl overflow-hidden bg-[#D8D6CD]">
          {event.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={event.imageUrl}
              alt={event.imageAlt ?? event.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#2B2B2B]/30 text-sm">
              No image available
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
