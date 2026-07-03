import { getTranslations } from "next-intl/server";

import { JourneyStepLayout } from "@/components/journey/JourneyStepLayout";

export default async function CollegeThoughtProcessPage() {
  const t = await getTranslations("journey");
  const tAudience = await getTranslations("audience");

  return (
    <JourneyStepLayout
      audience="college"
      currentStep="thought-process"
      badgeKey={tAudience("collegeBadge")}
      title={t("collegeThoughtTitle")}
      subtitle={t("collegeThoughtSubtitle")}
    >
      <div className="max-w-3xl space-y-6">
        <div className="space-y-4 text-muted-foreground">
          <p>{t("collegeThoughtP1")}</p>
          <p>{t("collegeThoughtP2")}</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {["fundamentals", "technical", "workInsight", "earningInsight"].map(
            (key) => (
              <li
                key={key}
                className="rounded-lg border bg-muted/20 px-4 py-3 text-sm"
              >
                <p className="font-medium">{t(`collegeModule_${key}Title`)}</p>
                <p className="mt-1 text-muted-foreground">
                  {t(`collegeModule_${key}Desc`)}
                </p>
              </li>
            ),
          )}
        </ul>
      </div>
    </JourneyStepLayout>
  );
}

