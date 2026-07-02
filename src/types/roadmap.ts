export interface Category {
  slug: string;
  titleKey: string;
  icon: "code" | "palette" | "database" | "server";
}

export interface Subcategory {
  slug: string;
  categorySlug: string;
  titleKey: string;
}

export interface RoadmapNode {
  id: string;
  titleKey: string;
  descriptionKey: string;
  order: number;
}

export interface Roadmap {
  slug: string;
  categorySlug: string;
  subcategorySlug: string;
  titleKey: string;
  descriptionKey: string;
  initialVotes: number;
  coinPrice: number;
  nodes: RoadmapNode[];
}
