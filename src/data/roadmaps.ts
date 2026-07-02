import type { Roadmap } from "@/types/roadmap";

export const MOCK_ROADMAPS: Roadmap[] = [
  {
    slug: "frontend-fundamentals",
    categorySlug: "programming",
    subcategorySlug: "web-development",
    titleKey: "frontendFundamentals",
    descriptionKey: "frontendFundamentalsDesc",
    initialVotes: 128,
    coinPrice: 50,
    nodes: [
      {
        id: "html-basics",
        titleKey: "htmlBasics",
        descriptionKey: "htmlBasicsDesc",
        order: 1,
      },
      {
        id: "css-layout",
        titleKey: "cssLayout",
        descriptionKey: "cssLayoutDesc",
        order: 2,
      },
      {
        id: "javascript-intro",
        titleKey: "javascriptIntro",
        descriptionKey: "javascriptIntroDesc",
        order: 3,
      },
    ],
  },
  {
    slug: "react-mastery",
    categorySlug: "programming",
    subcategorySlug: "web-development",
    titleKey: "reactMastery",
    descriptionKey: "reactMasteryDesc",
    initialVotes: 96,
    coinPrice: 75,
    nodes: [
      {
        id: "components-props",
        titleKey: "componentsProps",
        descriptionKey: "componentsPropsDesc",
        order: 1,
      },
      {
        id: "hooks-state",
        titleKey: "hooksState",
        descriptionKey: "hooksStateDesc",
        order: 2,
      },
      {
        id: "data-fetching",
        titleKey: "dataFetching",
        descriptionKey: "dataFetchingDesc",
        order: 3,
      },
    ],
  },
  {
    slug: "nodejs-basics",
    categorySlug: "programming",
    subcategorySlug: "backend-development",
    titleKey: "nodejsBasics",
    descriptionKey: "nodejsBasicsDesc",
    initialVotes: 74,
    coinPrice: 60,
    nodes: [
      {
        id: "node-runtime",
        titleKey: "nodeRuntime",
        descriptionKey: "nodeRuntimeDesc",
        order: 1,
      },
      {
        id: "express-api",
        titleKey: "expressApi",
        descriptionKey: "expressApiDesc",
        order: 2,
      },
    ],
  },
  {
    slug: "flutter-starter",
    categorySlug: "programming",
    subcategorySlug: "mobile-development",
    titleKey: "flutterStarter",
    descriptionKey: "flutterStarterDesc",
    initialVotes: 61,
    coinPrice: 55,
    nodes: [
      {
        id: "dart-basics",
        titleKey: "dartBasics",
        descriptionKey: "dartBasicsDesc",
        order: 1,
      },
      {
        id: "widget-tree",
        titleKey: "widgetTree",
        descriptionKey: "widgetTreeDesc",
        order: 2,
      },
    ],
  },
  {
    slug: "figma-workflow",
    categorySlug: "design",
    subcategorySlug: "ui-design",
    titleKey: "figmaWorkflow",
    descriptionKey: "figmaWorkflowDesc",
    initialVotes: 88,
    coinPrice: 40,
    nodes: [
      {
        id: "design-tokens",
        titleKey: "designTokens",
        descriptionKey: "designTokensDesc",
        order: 1,
      },
      {
        id: "prototyping",
        titleKey: "prototyping",
        descriptionKey: "prototypingDesc",
        order: 2,
      },
    ],
  },
  {
    slug: "python-ml-intro",
    categorySlug: "data-science",
    subcategorySlug: "machine-learning",
    titleKey: "pythonMlIntro",
    descriptionKey: "pythonMlIntroDesc",
    initialVotes: 102,
    coinPrice: 80,
    nodes: [
      {
        id: "numpy-pandas",
        titleKey: "numpyPandas",
        descriptionKey: "numpyPandasDesc",
        order: 1,
      },
      {
        id: "model-training",
        titleKey: "modelTraining",
        descriptionKey: "modelTrainingDesc",
        order: 2,
      },
    ],
  },
];

export const MOCK_TRENDING_SLUGS = [
  "frontend-fundamentals",
  "react-mastery",
  "python-ml-intro",
  "figma-workflow",
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
