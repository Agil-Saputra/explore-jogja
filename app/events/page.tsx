import { Footer } from "../components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getEvents } from "@/lib/contentful";
import EventsClient from "./EventsClient";
import EventSubmitForm from "./EventSubmitForm";

/* ── Page component (Server Component) ── */
export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="min-h-screen bg-cream text-[#2B2B2B] pt-32 pb-0 font-jakarta">
      <ScrollReveal>
        {/* Header Section */}
        <section className="px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Events
          </h1>
          <div className="text-[15px] leading-relaxed text-gray-800">
            <p>
              Discover the vibrant cultural events, festivals, and performances
              happening across Yogyakarta. From ancient Ramayana ballets to
              contemporary art exhibitions — there&apos;s always something to
              experience.
            </p>
          </div>
        </section>

        {/* Events List — driven by Contentful */}
        <EventsClient events={events} />

        {/* Event Registration Section */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-baseline mb-16">
            <h2 className="text-4xl md:text-[2.75rem] font-bold tracking-tight whitespace-nowrap">
              Submit Your Event
            </h2>
            <p className="text-[15px] font-medium text-gray-800">
              Organizing a cultural event in Yogyakarta? Fill in the form below
              and we&apos;ll feature it on our platform.
            </p>
          </div>

          <EventSubmitForm />
        </section>
      </ScrollReveal>
      <Footer />
    </main>
  );
}
