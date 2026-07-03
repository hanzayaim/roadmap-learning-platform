import { getTranslations } from "next-intl/server";

import { JourneyStepLayout } from "@/components/journey/JourneyStepLayout";
import { LearningFieldGrid } from "@/components/journey/LearningFieldGrid";
import { LEARNING_FIELDS } from "@/data/journey";

export default async function CollegeFieldsPage() {
  const t = await getTranslations("journey");
  const tAudience = await getTranslations("audience");

  return (
    <JourneyStepLayout
      audience="college"
      currentStep="fields"
      badgeKey={tAudience("collegeBadge")}
      title={t("fieldsTitle")}
      subtitle={t("collegeFieldsSubtitle")}
    >
      <LearningFieldGrid fields={LEARNING_FIELDS} basePath="/college" />
    </JourneyStepLayout>
  );
}

