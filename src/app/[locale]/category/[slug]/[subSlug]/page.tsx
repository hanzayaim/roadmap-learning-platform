import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { RoadmapCard } from "@/components/shared/ExploreCards";
import { Button } from "@/components/ui/button";
import {
  getCategoryBySlug,
  getSubcategoryBySlug,
} from "@/data/categories";
import { getRoadmapsBySubcategory } from "@/data/roadmaps";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string; subSlug: string }>;
}) {
  const { locale, slug, subSlug } = await params;
  setRequestLocale(locale);

  const category = getCategoryBySlug(slug);
  const subcategory = getSubcategoryBySlug(slug, subSlug);
  if (!category || !subcategory) notFound();

  const t = await getTranslations("explorePage");
  const tCategories = await getTranslations("categories");
  const tSubcategories = await getTranslations("subcategories");
  const roadmaps = getRoadmapsBySubcategory(slug, subSlug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8 space-y-4">
        <Button
          variant="ghost"
          size="sm"
          render={<Link href={`/category/${slug}`} />}
        >
          {t("backToSubcategories")}
        </Button>
        <div>
          <p className="text-sm text-muted-foreground">
            {tCategories(category.titleKey)}
          </p>
          <h1 className="text-3xl font-bold tracking-tight">
            {tSubcategories(subcategory.titleKey)}
          </h1>
          <p className="text-muted-foreground">{t("roadmapsDescription")}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {roadmaps.map((roadmap) => (
          <RoadmapCard key={roadmap.slug} roadmap={roadmap} />
        ))}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const pairs = [
    { slug: "programming", subSlug: "web-development" },
    { slug: "programming", subSlug: "mobile-development" },
    { slug: "programming", subSlug: "backend-development" },
    { slug: "design", subSlug: "ui-design" },
    { slug: "design", subSlug: "ux-research" },
    { slug: "data-science", subSlug: "machine-learning" },
    { slug: "devops", subSlug: "cloud-infrastructure" },
  ];

  return routing.locales.flatMap((locale) =>
    pairs.map(({ slug, subSlug }) => ({ locale, slug, subSlug })),
  );
}
