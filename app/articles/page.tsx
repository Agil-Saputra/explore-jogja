import { Footer } from "../components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getArticles } from "@/lib/contentful";
import ArticlesClient from "./ArticlesClient";
import { PhotoGallery } from "@/components/ui/gallery";
import ArticleSubmitForm from "./ArticleSubmitForm";
import ArticlesHero from "./ArticlesHero";

/* ── Page component (Server Component) ── */
export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen bg-cream text-gray-900">
      {/* ── Hero Section ── */}
      <ScrollReveal>
        <section className="bg-cream px-6 md:px-16 pt-28 md:pt-36 md:pb-12 md:py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center">
            <ArticlesHero />
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
