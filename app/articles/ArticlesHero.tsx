"use client";

import { useLocale } from "@/components/LocaleContext";

export default function ArticlesHero() {
  const { t } = useLocale();

  return (
    <div>
      <h1 className="text-4xl text-center md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-2 font-caveat uppercase">
        {t("articles.heroTitle")}
      </h1>
      <p className="text-[15px] md:text-base text-center leading-relaxed text-gray-700">
        {t("articles.heroDesc")}
      </p>
    </div>
  );
}
