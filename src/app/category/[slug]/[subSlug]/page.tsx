import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { RoadmapCard } from "@/components/shared/ExploreCards";
import { Button } from "@/components/ui/button";
import {
  getCategoryBySlug,
  getSubcategoryBySlug,
  getAllSubcategoryParams,
} from "@/data/categories";
import { getRoadmapsBySubcategory } from "@/data/roadmaps";
import { Link } from "@/i18n/navigation";
import { isAudience, type Audience } from "@/types/audience";

export const dynamicParams = true;

function withAudienceQuery(path: string, audience?: Audience) {
  if (!audience) return path;
  return `${path}?audience=${audience}`;
}

export default async function SubcategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string; subSlug: string }>;
  searchParams: Promise<{ audience?: string }>;
}) {
  const { slug, subSlug } = await params;
  const { audience: audienceParam } = await searchParams;

  const audience: Audience | undefined =
    audienceParam && isAudience(audienceParam) ? audienceParam : undefined;

  const category = getCategoryBySlug(slug);
  const subcategory = getSubcategoryBySlug(slug, subSlug);
  if (!category || !subcategory) notFound();

  const t = await getTranslations("explorePage");
  const tCategories = await getTranslations("categories");
  const tSubcategories = await getTranslations("subcategories");
  const roadmaps = getRoadmapsBySubcategory(slug, subSlug, audience);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8 space-y-4">
        <Button
          variant="ghost"
          size="sm"
          render={
            <Link href={withAudienceQuery(`/category/${slug}`, audience)} />
          }
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
        {roadmaps.length > 0 ? (
          roadmaps.map((roadmap) => (
            <RoadmapCard key={roadmap.slug} roadmap={roadmap} />
          ))
        ) : (
          <p className="text-sm text-muted-foreground md:col-span-2">
            {t("noRoadmapsYet")}
          </p>
        )}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getAllSubcategoryParams();
}
