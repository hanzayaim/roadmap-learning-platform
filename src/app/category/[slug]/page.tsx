import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { SubcategoryCard } from "@/components/shared/ExploreCards";
import { Button } from "@/components/ui/button";
import {
  getCategoryBySlug,
  getSubcategoriesByCategorySlug,
  getAllCategorySlugs,
} from "@/data/categories";
import { getRoadmapsBySubcategory } from "@/data/roadmaps";
import { Link } from "@/i18n/navigation";
import { isAudience, type Audience } from "@/types/audience";

export const dynamicParams = true;

function audienceBackHref(audience?: Audience) {
  if (audience === "sma-smk") return "/sma-smk";
  if (audience === "college") return "/college";
  return "/";
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ audience?: string }>;
}) {
  const { slug } = await params;
  const { audience: audienceParam } = await searchParams;

  const audience: Audience | undefined =
    audienceParam && isAudience(audienceParam) ? audienceParam : undefined;

  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const t = await getTranslations("explorePage");
  const tCategories = await getTranslations("categories");
  const subcategories = getSubcategoriesByCategorySlug(slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8 space-y-4">
        <Button
          variant="ghost"
          size="sm"
          render={<Link href={audienceBackHref(audience)} />}
        >
          {t("backToHome")}
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {tCategories(category.titleKey)}
          </h1>
          <p className="text-muted-foreground">{t("subcategoriesDescription")}</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subcategories.map((subcategory) => (
          <SubcategoryCard
            key={subcategory.slug}
            categorySlug={slug}
            slug={subcategory.slug}
            titleKey={subcategory.titleKey}
            audience={audience}
            roadmapCount={
              getRoadmapsBySubcategory(slug, subcategory.slug, audience).length
            }
          />
        ))}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}
