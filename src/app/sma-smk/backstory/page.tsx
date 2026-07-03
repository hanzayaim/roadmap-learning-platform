import { getTranslations } from "next-intl/server";

import { JourneyStepLayout } from "@/components/journey/JourneyStepLayout";

export default async function SmaSmkBackstoryPage() {
  const t = await getTranslations("journey");
  const tAudience = await getTranslations("audience");

  return (
    <JourneyStepLayout
      audience="sma-smk"
      currentStep="backstory"
      badgeKey={tAudience("smaSmkBadge")}
      title={t("smaSmkBackstoryTitle")}
      subtitle={t("smaSmkBackstorySubtitle")}
    >
      <div className="prose prose-neutral dark:prose-invert max-w-3xl space-y-4 text-muted-foreground">
        <p>{t("smaSmkBackstoryP1")}</p>
        <p>{t("smaSmkBackstoryP2")}</p>
        <p>{t("smaSmkBackstoryP3")}</p>
      </div>
    </JourneyStepLayout>
  );
}

