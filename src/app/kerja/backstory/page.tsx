import { getTranslations } from "next-intl/server";

import { JourneyStepLayout } from "@/components/journey/JourneyStepLayout";

export default async function KerjaBackstoryPage() {
  const t = await getTranslations("journey");
  const tAudience = await getTranslations("audience");

  return (
    <JourneyStepLayout
      audience="work"
      currentStep="backstory"
      badgeKey={tAudience("workBadge")}
      title={t("workBackstoryTitle")}
      subtitle={t("workBackstorySubtitle")}
    >
      <div className="max-w-3xl space-y-4 text-muted-foreground">
        <p>{t("workBackstoryP1")}</p>
        <p>{t("workBackstoryP2")}</p>
        <p>{t("workBackstoryP3")}</p>
      </div>
    </JourneyStepLayout>
  );
}

