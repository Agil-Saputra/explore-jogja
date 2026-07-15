import Image from "next/image";
import { Footer } from "../components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getArticles } from "@/lib/contentful";
import ArticlesClient from "./ArticlesClient";
import { PhotoGallery } from "@/components/ui/gallery";
import ArticleSubmitForm from "./ArticleSubmitForm";

/* ── Page component (Server Component) ── */
export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen bg-cream text-gray-900">
      {/* ── Hero Section ── */}
      <ScrollReveal>
        <section className="bg-cream px-6 md:px-16 pt-28 md:pt-36 md:pb-12 md:py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center">
            <div>
              <h1 className="text-4xl text-center md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-2 font-caveat uppercase">
                Stories &amp; Guides
              </h1>
              <p className="text-[15px] md:text-base text-center leading-relaxed text-gray-700 ">
                Explore hand-picked stories, local tips, and guides to help you
                experience the best of Yogyakarta — from ancient temples to
                vibrant street food.
              </p>
            </div>
            <PhotoGallery />
          </div>
        </section>
      </ScrollReveal>
      <ArticlesClient articles={articles} />
      <ScrollReveal>
        <div className="px-6 md:px-16 pb-12 md:pb-20 max-w-7xl mx-auto">
          <ArticleSubmitForm />
        </div>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
