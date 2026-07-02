import type { Roadmap } from "@/types/roadmap";

export const MOCK_ROADMAPS: Roadmap[] = [
  {
    slug: "software-engineer-career",
    categorySlug: "it",
    subcategorySlug: "software-engineering",
    titleKey: "softwareEngineerCareer",
    descriptionKey: "softwareEngineerCareerDesc",
    initialVotes: 214,
    coinPrice: 50,
    nodes: [
      { id: "se-root", titleKey: "careerStart", parentId: null, nodeType: "root" },
      { id: "se-awareness", titleKey: "industryAwareness", parentId: "se-root" },
      { id: "se-fundamentals", titleKey: "programmingBasics", parentId: "se-awareness" },
      { id: "se-html", titleKey: "htmlBasics", parentId: "se-fundamentals" },
      { id: "se-css", titleKey: "cssLayout", parentId: "se-fundamentals" },
      { id: "se-js", titleKey: "javascriptIntro", parentId: "se-fundamentals" },
      { id: "se-react", titleKey: "reactBasics", parentId: "se-js", nodeType: "subtopic" },
      { id: "se-node", titleKey: "nodeBasics", parentId: "se-js", nodeType: "optional" },
      { id: "se-git", titleKey: "gitWorkflow", parentId: "se-react", nodeType: "optional" },
      { id: "se-portfolio", titleKey: "portfolioProject", parentId: "se-react" },
    ],
  },
  {
    slug: "financial-analyst-career",
    categorySlug: "finance",
    subcategorySlug: "financial-planning",
    titleKey: "financialAnalystCareer",
    descriptionKey: "financialAnalystCareerDesc",
    initialVotes: 168,
    coinPrice: 45,
    nodes: [
      { id: "fa-root", titleKey: "careerStart", parentId: null, nodeType: "root" },
      { id: "fa-awareness", titleKey: "financeIndustryOverview", parentId: "fa-root" },
      { id: "fa-accounting", titleKey: "accountingBasics", parentId: "fa-awareness" },
      { id: "fa-excel", titleKey: "excelModeling", parentId: "fa-accounting" },
      { id: "fa-valuation", titleKey: "valuationIntro", parentId: "fa-excel" },
      { id: "fa-fpna", titleKey: "fpnaSkills", parentId: "fa-valuation", nodeType: "subtopic" },
      { id: "fa-cfa", titleKey: "cfaPrep", parentId: "fa-valuation", nodeType: "optional" },
    ],
  },
  {
    slug: "architect-career",
    categorySlug: "architecture",
    subcategorySlug: "residential-design",
    titleKey: "architectCareer",
    descriptionKey: "architectCareerDesc",
    initialVotes: 142,
    coinPrice: 55,
    nodes: [
      { id: "ar-root", titleKey: "careerStart", parentId: null, nodeType: "root" },
      { id: "ar-awareness", titleKey: "architectureIndustryOverview", parentId: "ar-root" },
      { id: "ar-drawing", titleKey: "technicalDrawing", parentId: "ar-awareness" },
      { id: "ar-history", titleKey: "architecturalHistory", parentId: "ar-awareness" },
      { id: "ar-cad", titleKey: "cadSoftware", parentId: "ar-drawing" },
      { id: "ar-bim", titleKey: "bimFundamentals", parentId: "ar-cad", nodeType: "subtopic" },
      { id: "ar-sustainable", titleKey: "sustainableDesign", parentId: "ar-cad", nodeType: "optional" },
      { id: "ar-portfolio", titleKey: "designPortfolio", parentId: "ar-bim" },
    ],
  },
  {
    slug: "nursing-career",
    categorySlug: "healthcare",
    subcategorySlug: "nursing-pathway",
    titleKey: "nursingCareer",
    descriptionKey: "nursingCareerDesc",
    initialVotes: 189,
    coinPrice: 40,
    nodes: [
      { id: "nu-root", titleKey: "careerStart", parentId: null, nodeType: "root" },
      { id: "nu-awareness", titleKey: "healthcareIndustryOverview", parentId: "nu-root" },
      { id: "nu-science", titleKey: "healthSciences", parentId: "nu-awareness" },
      { id: "nu-anatomy", titleKey: "anatomyBasics", parentId: "nu-science" },
      { id: "nu-clinical", titleKey: "clinicalPractice", parentId: "nu-anatomy" },
      { id: "nu-specialty", titleKey: "nursingSpecialty", parentId: "nu-clinical", nodeType: "subtopic" },
      { id: "nu-license", titleKey: "licensingExam", parentId: "nu-clinical" },
    ],
  },
  {
    slug: "marketing-strategist",
    categorySlug: "business",
    subcategorySlug: "marketing",
    titleKey: "marketingStrategist",
    descriptionKey: "marketingStrategistDesc",
    initialVotes: 121,
    coinPrice: 35,
    nodes: [
      { id: "mk-root", titleKey: "careerStart", parentId: null, nodeType: "root" },
      { id: "mk-awareness", titleKey: "businessIndustryOverview", parentId: "mk-root" },
      { id: "mk-research", titleKey: "marketResearch", parentId: "mk-awareness" },
      { id: "mk-brand", titleKey: "brandStrategy", parentId: "mk-research" },
      { id: "mk-digital", titleKey: "digitalMarketing", parentId: "mk-brand", nodeType: "subtopic" },
      { id: "mk-analytics", titleKey: "marketingAnalytics", parentId: "mk-digital" },
    ],
  },
  {
    slug: "graphic-designer-path",
    categorySlug: "creative",
    subcategorySlug: "graphic-design",
    titleKey: "graphicDesignerPath",
    descriptionKey: "graphicDesignerPathDesc",
    initialVotes: 134,
    coinPrice: 38,
    nodes: [
      { id: "gd-root", titleKey: "careerStart", parentId: null, nodeType: "root" },
      { id: "gd-awareness", titleKey: "creativeIndustryOverview", parentId: "gd-root" },
      { id: "gd-principles", titleKey: "designPrinciples", parentId: "gd-awareness" },
      { id: "gd-typography", titleKey: "typographyBasics", parentId: "gd-principles" },
      { id: "gd-tools", titleKey: "designTools", parentId: "gd-principles" },
      { id: "gd-portfolio", titleKey: "creativePortfolio", parentId: "gd-tools" },
    ],
  },
];

export const MOCK_TRENDING_SLUGS = [
  "software-engineer-career",
  "financial-analyst-career",
  "architect-career",
  "nursing-career",
];

export function getRoadmapBySlug(slug: string) {
  return MOCK_ROADMAPS.find((roadmap) => roadmap.slug === slug);
}

export function getRoadmapsBySubcategory(
  categorySlug: string,
  subcategorySlug: string,
) {
  return MOCK_ROADMAPS.filter(
    (roadmap) =>
      roadmap.categorySlug === categorySlug &&
      roadmap.subcategorySlug === subcategorySlug,
  );
}

export function getTrendingRoadmaps() {
  return MOCK_TRENDING_SLUGS.map((slug) => getRoadmapBySlug(slug)).filter(
    (roadmap): roadmap is Roadmap => Boolean(roadmap),
  );
}

export function getRoadmapCountByCategory(categorySlug: string) {
  return MOCK_ROADMAPS.filter(
    (roadmap) => roadmap.categorySlug === categorySlug,
  ).length;
}

export function getAllRoadmapSlugs() {
  return MOCK_ROADMAPS.map((roadmap) => roadmap.slug);
}
