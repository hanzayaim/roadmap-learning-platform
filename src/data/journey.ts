import type { Audience } from "@/types/audience";

export type JourneyStepId =
  | "backstory"
  | "thought-process"
  | "careers"
  | "fields";

export type CollegeModuleId =
  | "fundamentals"
  | "technical"
  | "work-insight"
  | "earning-insight";

export type WorkModuleId = "prospects" | "specific-technical";

export interface JourneyStep {
  id: JourneyStepId;
  titleKey: string;
  descriptionKey: string;
}

export interface CareerAspiration {
  slug: string;
  categorySlug: string;
  titleKey: string;
  descriptionKey: string;
  roadmapSlug?: string;
}

export interface FieldModuleLink {
  id: CollegeModuleId | WorkModuleId;
  titleKey: string;
  descriptionKey: string;
  roadmapSlug?: string;
  contentKey?: string;
}

export interface LearningField {
  slug: string;
  categorySlug: string;
  titleKey: string;
  descriptionKey: string;
}

export const AUDIENCE_BASE_PATH: Record<Audience, string> = {
  "sma-smk": "/sma-smk",
  college: "/college",
  work: "/kerja",
};

export const JOURNEY_STEPS: Record<Audience, JourneyStepId[]> = {
  "sma-smk": ["backstory", "thought-process", "careers"],
  college: ["backstory", "thought-process", "fields"],
  work: ["backstory", "thought-process", "fields"],
};

export const JOURNEY_STEP_META: Record<JourneyStepId, JourneyStep> = {
  backstory: {
    id: "backstory",
    titleKey: "backstoryTitle",
    descriptionKey: "backstoryDescription",
  },
  "thought-process": {
    id: "thought-process",
    titleKey: "thoughtProcessTitle",
    descriptionKey: "thoughtProcessDescription",
  },
  careers: {
    id: "careers",
    titleKey: "careersTitle",
    descriptionKey: "careersDescription",
  },
  fields: {
    id: "fields",
    titleKey: "fieldsTitle",
    descriptionKey: "fieldsDescription",
  },
};

export const LEARNING_FIELDS: LearningField[] = [
  {
    slug: "it",
    categorySlug: "it",
    titleKey: "fieldIt",
    descriptionKey: "fieldItDesc",
  },
  {
    slug: "architecture",
    categorySlug: "architecture",
    titleKey: "fieldArchitecture",
    descriptionKey: "fieldArchitectureDesc",
  },
  {
    slug: "finance",
    categorySlug: "finance",
    titleKey: "fieldFinance",
    descriptionKey: "fieldFinanceDesc",
  },
  {
    slug: "healthcare",
    categorySlug: "healthcare",
    titleKey: "fieldHealthcare",
    descriptionKey: "fieldHealthcareDesc",
  },
  {
    slug: "creative",
    categorySlug: "creative",
    titleKey: "fieldCreative",
    descriptionKey: "fieldCreativeDesc",
  },
  {
    slug: "business",
    categorySlug: "business",
    titleKey: "fieldBusiness",
    descriptionKey: "fieldBusinessDesc",
  },
];

export const SMA_CAREER_ASPIRATIONS: CareerAspiration[] = [
  {
    slug: "become-engineer",
    categorySlug: "it",
    titleKey: "becomeEngineer",
    descriptionKey: "becomeEngineerDesc",
    roadmapSlug: "it-career-preview",
  },
  {
    slug: "become-architect",
    categorySlug: "architecture",
    titleKey: "becomeArchitect",
    descriptionKey: "becomeArchitectDesc",
    roadmapSlug: "architect-career",
  },
  {
    slug: "become-nurse",
    categorySlug: "healthcare",
    titleKey: "becomeNurse",
    descriptionKey: "becomeNurseDesc",
    roadmapSlug: "nursing-career",
  },
  {
    slug: "become-designer",
    categorySlug: "creative",
    titleKey: "becomeDesigner",
    descriptionKey: "becomeDesignerDesc",
    roadmapSlug: "graphic-designer-path",
  },
  {
    slug: "become-marketer",
    categorySlug: "business",
    titleKey: "becomeMarketer",
    descriptionKey: "becomeMarketerDesc",
    roadmapSlug: "marketing-strategist",
  },
  {
    slug: "become-financial-analyst",
    categorySlug: "finance",
    titleKey: "becomeFinancialAnalyst",
    descriptionKey: "becomeFinancialAnalystDesc",
  },
];

const COLLEGE_FIELD_MODULES: Record<string, FieldModuleLink[]> = {
  it: [
    {
      id: "fundamentals",
      titleKey: "fundamentalsTitle",
      descriptionKey: "fundamentalsDesc",
      roadmapSlug: "it-career-preview",
    },
    {
      id: "technical",
      titleKey: "technicalTitle",
      descriptionKey: "technicalDesc",
      roadmapSlug: "software-engineer-career",
    },
    {
      id: "work-insight",
      titleKey: "workInsightTitle",
      descriptionKey: "workInsightDesc",
      contentKey: "itWorkInsight",
    },
    {
      id: "earning-insight",
      titleKey: "earningInsightTitle",
      descriptionKey: "earningInsightDesc",
      contentKey: "itEarningInsight",
    },
  ],
  architecture: [
    {
      id: "fundamentals",
      titleKey: "fundamentalsTitle",
      descriptionKey: "fundamentalsDesc",
      roadmapSlug: "architect-career",
    },
    {
      id: "technical",
      titleKey: "technicalTitle",
      descriptionKey: "technicalDesc",
      roadmapSlug: "architect-career",
    },
    {
      id: "work-insight",
      titleKey: "workInsightTitle",
      descriptionKey: "workInsightDesc",
      contentKey: "architectureWorkInsight",
    },
    {
      id: "earning-insight",
      titleKey: "earningInsightTitle",
      descriptionKey: "earningInsightDesc",
      contentKey: "architectureEarningInsight",
    },
  ],
  finance: [
    {
      id: "fundamentals",
      titleKey: "fundamentalsTitle",
      descriptionKey: "fundamentalsDesc",
    },
    {
      id: "technical",
      titleKey: "technicalTitle",
      descriptionKey: "technicalDesc",
      roadmapSlug: "financial-analyst-career",
    },
    {
      id: "work-insight",
      titleKey: "workInsightTitle",
      descriptionKey: "workInsightDesc",
      contentKey: "financeWorkInsight",
    },
    {
      id: "earning-insight",
      titleKey: "earningInsightTitle",
      descriptionKey: "earningInsightDesc",
      contentKey: "financeEarningInsight",
    },
  ],
  healthcare: [
    {
      id: "fundamentals",
      titleKey: "fundamentalsTitle",
      descriptionKey: "fundamentalsDesc",
      roadmapSlug: "nursing-career",
    },
    {
      id: "technical",
      titleKey: "technicalTitle",
      descriptionKey: "technicalDesc",
      roadmapSlug: "nursing-career",
    },
    {
      id: "work-insight",
      titleKey: "workInsightTitle",
      descriptionKey: "workInsightDesc",
      contentKey: "healthcareWorkInsight",
    },
    {
      id: "earning-insight",
      titleKey: "earningInsightTitle",
      descriptionKey: "earningInsightDesc",
      contentKey: "healthcareEarningInsight",
    },
  ],
  creative: [
    {
      id: "fundamentals",
      titleKey: "fundamentalsTitle",
      descriptionKey: "fundamentalsDesc",
      roadmapSlug: "graphic-designer-path",
    },
    {
      id: "technical",
      titleKey: "technicalTitle",
      descriptionKey: "technicalDesc",
      roadmapSlug: "graphic-designer-path",
    },
    {
      id: "work-insight",
      titleKey: "workInsightTitle",
      descriptionKey: "workInsightDesc",
      contentKey: "creativeWorkInsight",
    },
    {
      id: "earning-insight",
      titleKey: "earningInsightTitle",
      descriptionKey: "earningInsightDesc",
      contentKey: "creativeEarningInsight",
    },
  ],
  business: [
    {
      id: "fundamentals",
      titleKey: "fundamentalsTitle",
      descriptionKey: "fundamentalsDesc",
      roadmapSlug: "marketing-strategist",
    },
    {
      id: "technical",
      titleKey: "technicalTitle",
      descriptionKey: "technicalDesc",
      roadmapSlug: "marketing-strategist",
    },
    {
      id: "work-insight",
      titleKey: "workInsightTitle",
      descriptionKey: "workInsightDesc",
      contentKey: "businessWorkInsight",
    },
    {
      id: "earning-insight",
      titleKey: "earningInsightTitle",
      descriptionKey: "earningInsightDesc",
      contentKey: "businessEarningInsight",
    },
  ],
};

const WORK_FIELD_MODULES: Record<string, FieldModuleLink[]> = {
  it: [
    {
      id: "prospects",
      titleKey: "prospectsTitle",
      descriptionKey: "prospectsDesc",
      contentKey: "itProspects",
    },
    {
      id: "specific-technical",
      titleKey: "specificTechnicalTitle",
      descriptionKey: "specificTechnicalDesc",
      roadmapSlug: "software-engineer-career",
    },
  ],
  architecture: [
    {
      id: "prospects",
      titleKey: "prospectsTitle",
      descriptionKey: "prospectsDesc",
      contentKey: "architectureProspects",
    },
    {
      id: "specific-technical",
      titleKey: "specificTechnicalTitle",
      descriptionKey: "specificTechnicalDesc",
      roadmapSlug: "architect-career",
    },
  ],
  finance: [
    {
      id: "prospects",
      titleKey: "prospectsTitle",
      descriptionKey: "prospectsDesc",
      contentKey: "financeProspects",
    },
    {
      id: "specific-technical",
      titleKey: "specificTechnicalTitle",
      descriptionKey: "specificTechnicalDesc",
      roadmapSlug: "financial-analyst-career",
    },
  ],
  healthcare: [
    {
      id: "prospects",
      titleKey: "prospectsTitle",
      descriptionKey: "prospectsDesc",
      contentKey: "healthcareProspects",
    },
    {
      id: "specific-technical",
      titleKey: "specificTechnicalTitle",
      descriptionKey: "specificTechnicalDesc",
      roadmapSlug: "nursing-career",
    },
  ],
  creative: [
    {
      id: "prospects",
      titleKey: "prospectsTitle",
      descriptionKey: "prospectsDesc",
      contentKey: "creativeProspects",
    },
    {
      id: "specific-technical",
      titleKey: "specificTechnicalTitle",
      descriptionKey: "specificTechnicalDesc",
      roadmapSlug: "graphic-designer-path",
    },
  ],
  business: [
    {
      id: "prospects",
      titleKey: "prospectsTitle",
      descriptionKey: "prospectsDesc",
      contentKey: "businessProspects",
    },
    {
      id: "specific-technical",
      titleKey: "specificTechnicalTitle",
      descriptionKey: "specificTechnicalDesc",
      roadmapSlug: "marketing-strategist",
    },
  ],
};

export function getJourneySteps(audience: Audience) {
  return JOURNEY_STEPS[audience].map((id) => JOURNEY_STEP_META[id]);
}

export function getStepPath(audience: Audience, stepId: JourneyStepId) {
  const base = AUDIENCE_BASE_PATH[audience];
  if (stepId === "careers") return `${base}/careers`;
  if (stepId === "fields") return `${base}/fields`;
  return `${base}/${stepId}`;
}

export function getNextStep(
  audience: Audience,
  currentStep: JourneyStepId,
): JourneyStepId | null {
  const steps = JOURNEY_STEPS[audience];
  const index = steps.indexOf(currentStep);
  if (index === -1 || index === steps.length - 1) return null;
  return steps[index + 1] ?? null;
}

export function getLearningField(slug: string) {
  return LEARNING_FIELDS.find((field) => field.slug === slug);
}

export function getCareerAspiration(slug: string) {
  return SMA_CAREER_ASPIRATIONS.find((career) => career.slug === slug);
}

export function getCollegeFieldModules(fieldSlug: string) {
  return COLLEGE_FIELD_MODULES[fieldSlug] ?? [];
}

export function getWorkFieldModules(fieldSlug: string) {
  return WORK_FIELD_MODULES[fieldSlug] ?? [];
}

export function getAllCareerSlugs() {
  return SMA_CAREER_ASPIRATIONS.map((career) => career.slug);
}

export function getAllFieldSlugs() {
  return LEARNING_FIELDS.map((field) => field.slug);
}

export function isCollegeModuleId(value: string): value is CollegeModuleId {
  return ["fundamentals", "technical", "work-insight", "earning-insight"].includes(
    value,
  );
}

export function isWorkModuleId(value: string): value is WorkModuleId {
  return ["prospects", "specific-technical"].includes(value);
}
