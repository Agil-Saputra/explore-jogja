"use client";

import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { useLocale } from "@/components/LocaleContext";

/* ── Back Button in Hero ── */
export function ArticleBackButton() {
  const { t } = useLocale();
  return (
    <Link
      href="/articles"
      className="inline-flex items-center gap-2 text-white/90 hover:text-white bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-white/25"
    >
      <ArrowLeft size={15} />
      {t("articles.allArticles")}
    </Link>
  );
}

/* ── Meta row (editorial + date) ── */
export function ArticleMeta({ isoDate }: { isoDate: string }) {
  const { t, locale } = useLocale();
  const formattedDate = new Date(isoDate).toLocaleDateString(
    locale === "id" ? "id-ID" : "en-US",
    { month: "long", day: "numeric", year: "numeric" }
  );
  return (
    <div className="flex items-center gap-4 mb-10 pb-8 border-b border-gray-200">
      <span className="inline-flex items-center gap-1.5 text-gray-500 text-sm">
        <Calendar size={14} />
        {t("articles.editorial")}
      </span>
      <span className="w-1 h-1 rounded-full bg-gray-300" />
      <span className="text-sm text-gray-400">{formattedDate}</span>
    </div>
  );
}

/* ── "No content available" fallback ── */
export function ArticleNoContent() {
  const { t } = useLocale();
  return <p className="text-gray-400 italic">{t("articles.noContent")}</p>;
}

/* ── Bottom back link ── */
export function ArticleBackLink() {
  const { t } = useLocale();
  return (
    <Link
      href="/articles"
      className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-gray-900 transition-colors group"
    >
      <ArrowLeft
        size={16}
        className="group-hover:-translate-x-1 transition-transform"
      />
      {t("articles.backToAll")}
    </Link>
  );
}
