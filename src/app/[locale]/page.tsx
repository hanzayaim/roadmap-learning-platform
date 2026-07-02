import { getTranslations, setRequestLocale } from "next-intl/server";

import { ExploreHub } from "@/components/shared/ExploreHub";
import { MOCK_CATEGORIES } from "@/data/categories";
import { getRoadmapCountByCategory, getTrendingRoadmaps } from "@/data/roadmaps";
import { routing } from "@/i18n/routing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("homePage");
  const categories = MOCK_CATEGORIES.map((category) => ({
    ...category,
    roadmapCount: getRoadmapCountByCategory(category.slug),
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="mb-12 max-w-2xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {t("heroTitle")}
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          {t("heroSubtitle")}
        </p>
      </section>

      <div id="explore">
        <ExploreHub
        categories={categories}
        trendingRoadmaps={getTrendingRoadmaps()}
        />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
