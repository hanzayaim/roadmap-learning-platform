import type { RoadmapNode, RoadmapTreeNode } from "@/types/roadmap";

export function buildRoadmapTree(nodes: RoadmapNode[]): RoadmapTreeNode | null {
  const map = new Map<string, RoadmapTreeNode>();

  for (const node of nodes) {
    map.set(node.id, { ...node, children: [] });
  }

  let root: RoadmapTreeNode | null = null;

  for (const node of nodes) {
    const current = map.get(node.id);
    if (!current) continue;

    if (node.parentId === null) {
      root = current;
      continue;
    }

    const parent = map.get(node.parentId);
    parent?.children.push(current);
  }

  return root;
}

export function countRoadmapNodes(nodes: RoadmapNode[]) {
  return nodes.length;
}
