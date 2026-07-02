import type { CategoryIcon } from "@/lib/category-icons";

export interface Category {
  slug: string;
  titleKey: string;
  icon: CategoryIcon;
}

export interface Subcategory {
  slug: string;
  categorySlug: string;
  titleKey: string;
}

export type RoadmapNodeType = "root" | "topic" | "subtopic" | "optional";

export interface RoadmapNode {
  id: string;
  titleKey: string;
  parentId: string | null;
  nodeType?: RoadmapNodeType;
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

export interface RoadmapTreeNode extends RoadmapNode {
  children: RoadmapTreeNode[];
}
