import Image from "next/image";
import { Footer } from "../components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getArticles } from "@/lib/contentful";
import ArticlesClient from "./ArticlesClient";

/* ── Page component (Server Component) ── */
export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen bg-cream text-gray-900">
      {/* ── Hero Section ── */}
      <ScrollReveal>
        <section className="bg-cream px-6 md:px-16 pt-28 md:pt-36 pb-12 md:py-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-center">
            {/* Left — Heading + Overlapping Images */}
            <div className="flex-1 min-w-0">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8 font-caveat uppercase">
                Stories &amp; Guides
              </h1>

              {/* Overlapping images cluster */}
              <div className="relative w-full max-w-[420px] h-[220px] md:h-[280px]">
                {/* Back image */}
                <div className="absolute top-0 left-0 w-[55%] h-full rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/gunung-kidul-beach.avif"
                    alt="Yogyakarta landscape"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Front image — overlapping */}
                <div className="absolute top-6 left-[38%] w-[55%] h-[85%] rounded-2xl overflow-hidden shadow-xl border-4 border-cream">
                  <Image
                    src="/assets/candi-prambanan.webp"
                    alt="Yogyakarta culture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right — Description */}
            <div className="flex-1">
              <p className="text-[15px] md:text-base leading-relaxed text-gray-700 max-w-lg">
                Explore hand-picked stories, local tips, and guides to help you
                experience the best of Yogyakarta — from ancient temples to
                vibrant street food.
              </p>
            </div>
          </div>
        </section>

        {/* ── Client interactive section (search, filter, grid) ── */}
        <ArticlesClient articles={articles} />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
