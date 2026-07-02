import type { Category, Subcategory } from "@/types/roadmap";

export const MOCK_CATEGORIES: Category[] = [
  { slug: "architecture", titleKey: "architecture", icon: "architecture" },
  { slug: "it", titleKey: "it", icon: "it" },
  { slug: "finance", titleKey: "finance", icon: "finance" },
  { slug: "healthcare", titleKey: "healthcare", icon: "healthcare" },
  { slug: "creative", titleKey: "creative", icon: "creative" },
  { slug: "business", titleKey: "business", icon: "business" },
];

export const MOCK_SUBCATEGORIES: Subcategory[] = [
  {
    slug: "residential-design",
    categorySlug: "architecture",
    titleKey: "residentialDesign",
  },
  {
    slug: "urban-planning",
    categorySlug: "architecture",
    titleKey: "urbanPlanning",
  },
  {
    slug: "software-engineering",
    categorySlug: "it",
    titleKey: "softwareEngineering",
  },
  {
    slug: "data-analytics",
    categorySlug: "it",
    titleKey: "dataAnalytics",
  },
  {
    slug: "cybersecurity",
    categorySlug: "it",
    titleKey: "cybersecurity",
  },
  {
    slug: "financial-planning",
    categorySlug: "finance",
    titleKey: "financialPlanning",
  },
  {
    slug: "investment-banking",
    categorySlug: "finance",
    titleKey: "investmentBanking",
  },
  {
    slug: "accounting",
    categorySlug: "finance",
    titleKey: "accounting",
  },
  {
    slug: "nursing-pathway",
    categorySlug: "healthcare",
    titleKey: "nursingPathway",
  },
  {
    slug: "public-health",
    categorySlug: "healthcare",
    titleKey: "publicHealth",
  },
  {
    slug: "graphic-design",
    categorySlug: "creative",
    titleKey: "graphicDesign",
  },
  {
    slug: "content-creation",
    categorySlug: "creative",
    titleKey: "contentCreation",
  },
  {
    slug: "marketing",
    categorySlug: "business",
    titleKey: "marketing",
  },
  {
    slug: "entrepreneurship",
    categorySlug: "business",
    titleKey: "entrepreneurship",
  },
];

export function getCategoryBySlug(slug: string) {
  return MOCK_CATEGORIES.find((category) => category.slug === slug);
}

export function getSubcategoriesByCategorySlug(categorySlug: string) {
  return MOCK_SUBCATEGORIES.filter(
    (subcategory) => subcategory.categorySlug === categorySlug,
  );
}

export function getSubcategoryBySlug(categorySlug: string, subSlug: string) {
  return MOCK_SUBCATEGORIES.find(
    (subcategory) =>
      subcategory.categorySlug === categorySlug &&
      subcategory.slug === subSlug,
  );
}

export function getAllCategorySlugs() {
  return MOCK_CATEGORIES.map((category) => category.slug);
}

export function getAllSubcategoryParams() {
  return MOCK_SUBCATEGORIES.map((subcategory) => ({
    slug: subcategory.categorySlug,
    subSlug: subcategory.slug,
  }));
}
