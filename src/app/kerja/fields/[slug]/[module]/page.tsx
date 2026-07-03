import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { JourneyFlowNav } from "@/components/journey/JourneyFlowNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getLearningField,
  getWorkFieldModules,
  isWorkModuleId,
} from "@/data/journey";
import { Link } from "@/i18n/navigation";

export default async function KerjaModuleContentPage({
  params,
}: {
  params: Promise<{ slug: string; module: string }>;
}) {
  const { slug, module: moduleId } = await params;

  if (!isWorkModuleId(moduleId) || moduleId !== "prospects") notFound();

  const field = getLearningField(slug);
  if (!field) notFound();

  const modules = getWorkFieldModules(slug);
  const fieldModule = modules.find((item) => item.id === moduleId);
  if (!fieldModule?.contentKey) notFound();

  const t = await getTranslations("journey");
  const tContent = await getTranslations("journeyContent");

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="mb-8">
        <Button
          variant="ghost"
          size="sm"
          render={<Link href={`/kerja/fields/${slug}`} />}
        >
          {t("backToField")}
        </Button>
      </div>

      <JourneyFlowNav audience="work" currentStep="fields" />

      <Card>
        <CardHeader>
          <CardTitle>{t(fieldModule.titleKey)}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>{tContent(`${fieldModule.contentKey}.intro`)}</p>
          <p>{tContent(`${fieldModule.contentKey}.body`)}</p>
          <p>{tContent(`${fieldModule.contentKey}.tip`)}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export function generateStaticParams() {
  return ["it", "architecture", "finance", "healthcare", "creative", "business"].map(
    (slug) => ({ slug, module: "prospects" }),
  );
}
