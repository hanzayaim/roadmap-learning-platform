import { getTranslations } from "next-intl/server";

import { JourneyStepLayout } from "@/components/journey/JourneyStepLayout";

export default async function KerjaThoughtProcessPage() {
  const t = await getTranslations("journey");
  const tAudience = await getTranslations("audience");

  return (
    <JourneyStepLayout
      audience="work"
      currentStep="thought-process"
      badgeKey={tAudience("workBadge")}
      title={t("workThoughtTitle")}
      subtitle={t("workThoughtSubtitle")}
    >
      <div className="max-w-3xl space-y-6">
        <div className="space-y-4 text-muted-foreground">
          <p>{t("workThoughtP1")}</p>
          <p>{t("workThoughtP2")}</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {["prospects", "specificTechnical"].map((key) => (
            <li
              key={key}
              className="rounded-lg border bg-muted/20 px-4 py-3 text-sm"
            >
              <p className="font-medium">{t(`workModule_${key}Title`)}</p>
              <p className="mt-1 text-muted-foreground">
                {t(`workModule_${key}Desc`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </JourneyStepLayout>
  );
}

