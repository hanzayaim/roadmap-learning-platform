import { getTranslations } from "next-intl/server";

import { JourneyStepLayout } from "@/components/journey/JourneyStepLayout";

export default async function CollegeBackstoryPage() {
  const t = await getTranslations("journey");
  const tAudience = await getTranslations("audience");

  return (
    <JourneyStepLayout
      audience="college"
      currentStep="backstory"
      badgeKey={tAudience("collegeBadge")}
      title={t("collegeBackstoryTitle")}
      subtitle={t("collegeBackstorySubtitle")}
    >
      <div className="max-w-3xl space-y-4 text-muted-foreground">
        <p>{t("collegeBackstoryP1")}</p>
        <p>{t("collegeBackstoryP2")}</p>
        <p>{t("collegeBackstoryP3")}</p>
      </div>
    </JourneyStepLayout>
  );
}

