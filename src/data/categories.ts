import type { Category, Subcategory } from "@/types/roadmap";

export const MOCK_CATEGORIES: Category[] = [
  { slug: "programming", titleKey: "programming", icon: "code" },
  { slug: "design", titleKey: "design", icon: "palette" },
  { slug: "data-science", titleKey: "dataScience", icon: "database" },
  { slug: "devops", titleKey: "devops", icon: "server" },
];

export const MOCK_SUBCATEGORIES: Subcategory[] = [
  {
    slug: "web-development",
    categorySlug: "programming",
    titleKey: "webDevelopment",
  },
  {
    slug: "mobile-development",
    categorySlug: "programming",
    titleKey: "mobileDevelopment",
  },
  {
    slug: "backend-development",
    categorySlug: "programming",
    titleKey: "backendDevelopment",
  },
  {
    slug: "ui-design",
    categorySlug: "design",
    titleKey: "uiDesign",
  },
  {
    slug: "ux-research",
    categorySlug: "design",
    titleKey: "uxResearch",
  },
  {
    slug: "machine-learning",
    categorySlug: "data-science",
    titleKey: "machineLearning",
  },
  {
    slug: "cloud-infrastructure",
    categorySlug: "devops",
    titleKey: "cloudInfrastructure",
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
