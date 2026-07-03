import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { JourneyFlowNav } from "@/components/journey/JourneyFlowNav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCareerAspiration, getAllCareerSlugs } from "@/data/journey";
import { Link } from "@/i18n/navigation";
import { categoryIconMap } from "@/lib/category-icons";

export default async function SmaSmkCareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const career = getCareerAspiration(slug);
  if (!career) notFound();

  const t = await getTranslations("journey");
  const tAudience = await getTranslations("audience");
  const Icon = categoryIconMap[career.categorySlug as keyof typeof categoryIconMap];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="mb-8">
        <Button variant="ghost" size="sm" render={<Link href="/sma-smk/careers" />}>
          {t("backToCareers")}
        </Button>
      </div>

      <JourneyFlowNav audience="sma-smk" currentStep="careers" />

      <header className="mb-8 space-y-4">
        <p className="text-sm font-medium text-primary">{tAudience("smaSmkBadge")}</p>
        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="size-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {t(career.titleKey)}
            </h1>
            <p className="mt-2 text-muted-foreground">{t(career.descriptionKey)}</p>
          </div>
        </div>
      </header>

      <Card>
        <CardHeader className="space-y-4">
          <CardTitle>{t("careerDetailWhatYouLearn")}</CardTitle>
          <CardDescription>{t(`careerDetail_${career.slug}`)}</CardDescription>
          {career.roadmapSlug ? (
            <Button render={<Link href={`/roadmap/${career.roadmapSlug}`} />}>
              {t("openRoadmap")}
            </Button>
          ) : (
            <p className="text-sm text-muted-foreground">{t("careerComingSoon")}</p>
          )}
        </CardHeader>
      </Card>
    </div>
  );
}

export function generateStaticParams() {
  return getAllCareerSlugs().map((slug) => ({ slug }));
}
