import { getTranslations } from "next-intl/server";

import { JourneyStepLayout } from "@/components/journey/JourneyStepLayout";
import { LearningFieldGrid } from "@/components/journey/LearningFieldGrid";
import { LEARNING_FIELDS } from "@/data/journey";

export default async function KerjaFieldsPage() {
  const t = await getTranslations("journey");
  const tAudience = await getTranslations("audience");

  return (
    <JourneyStepLayout
      audience="work"
      currentStep="fields"
      badgeKey={tAudience("workBadge")}
      title={t("fieldsTitle")}
      subtitle={t("workFieldsSubtitle")}
    >
      <LearningFieldGrid fields={LEARNING_FIELDS} basePath="/kerja" />
    </JourneyStepLayout>
  );
}

