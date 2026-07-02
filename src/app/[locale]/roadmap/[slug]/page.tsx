import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { RoadmapTree } from "@/components/shared/RoadmapTree";
import { Button } from "@/components/ui/button";
import { getCategoryBySlug, getSubcategoryBySlug } from "@/data/categories";
import { getRoadmapBySlug, getAllRoadmapSlugs } from "@/data/roadmaps";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default async function RoadmapDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const roadmap = getRoadmapBySlug(slug);
  if (!roadmap) notFound();

  const t = await getTranslations("roadmapPage");
  const tExplore = await getTranslations("explorePage");
  const tRoadmaps = await getTranslations("roadmaps");
  const tCategories = await getTranslations("categories");
  const tSubcategories = await getTranslations("subcategories");

  const category = getCategoryBySlug(roadmap.categorySlug);
  const subcategory = getSubcategoryBySlug(
    roadmap.categorySlug,
    roadmap.subcategorySlug,
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8 space-y-4">
        <Button
          variant="ghost"
          size="sm"
          render={
            <Link
              href={`/category/${roadmap.categorySlug}/${roadmap.subcategorySlug}`}
            />
          }
        >
          {tExplore("backToSubcategories")}
        </Button>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            {category ? tCategories(category.titleKey) : null}
            {subcategory ? ` / ${tSubcategories(subcategory.titleKey)}` : null}
          </p>
          <h1 className="text-3xl font-bold tracking-tight">
            {tRoadmaps(roadmap.titleKey)}
          </h1>
          <p className="text-muted-foreground">
            {tRoadmaps(roadmap.descriptionKey)}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">{t("learningPath")}</h2>
          <p className="text-sm text-muted-foreground">
            {t("learningPathDescription")}
          </p>
        </div>
      </div>

      <RoadmapTree
        nodes={roadmap.nodes}
        initialVotes={roadmap.initialVotes}
        coinPrice={roadmap.coinPrice}
      />
    </div>
  );
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllRoadmapSlugs().map((slug) => ({ locale, slug })),
  );
}
