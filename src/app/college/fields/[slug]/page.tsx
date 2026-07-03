import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { FieldModuleGrid } from "@/components/journey/FieldModuleGrid";
import { JourneyFlowNav } from "@/components/journey/JourneyFlowNav";
import { Button } from "@/components/ui/button";
import {
  getCollegeFieldModules,
  getLearningField,
  getAllFieldSlugs,
} from "@/data/journey";
import { Link } from "@/i18n/navigation";
import { categoryIconMap } from "@/lib/category-icons";

export default async function CollegeFieldDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const field = getLearningField(slug);
  if (!field) notFound();

  const modules = getCollegeFieldModules(slug);
  const t = await getTranslations("journey");
  const tAudience = await getTranslations("audience");
  const Icon = categoryIconMap[field.categorySlug as keyof typeof categoryIconMap];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="mb-8">
        <Button variant="ghost" size="sm" render={<Link href="/college/fields" />}>
          {t("backToFields")}
        </Button>
      </div>

      <JourneyFlowNav audience="college" currentStep="fields" />

      <header className="mb-10 flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-6" />
        </div>
        <div>
          <p className="text-sm font-medium text-primary">{tAudience("collegeBadge")}</p>
          <h1 className="text-3xl font-bold tracking-tight">{t(field.titleKey)}</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            {t(field.descriptionKey)}
          </p>
          <p className="mt-2 text-sm font-medium">{t("collegeFieldFlowHint")}</p>
        </div>
      </header>

      <FieldModuleGrid audience="college" fieldSlug={slug} modules={modules} />
    </div>
  );
}

export function generateStaticParams() {
  return getAllFieldSlugs().map((slug) => ({ slug }));
}
