import { getTranslations } from "next-intl/server";

import { CareerAspirationGrid } from "@/components/journey/CareerAspirationGrid";
import { JourneyStepLayout } from "@/components/journey/JourneyStepLayout";
import { SMA_CAREER_ASPIRATIONS } from "@/data/journey";

export default async function SmaSmkCareersPage() {
  const t = await getTranslations("journey");
  const tAudience = await getTranslations("audience");

  return (
    <JourneyStepLayout
      audience="sma-smk"
      currentStep="careers"
      badgeKey={tAudience("smaSmkBadge")}
      title={t("careersTitle")}
      subtitle={t("smaSmkCareersSubtitle")}
    >
      <CareerAspirationGrid careers={SMA_CAREER_ASPIRATIONS} />
    </JourneyStepLayout>
  );
}

