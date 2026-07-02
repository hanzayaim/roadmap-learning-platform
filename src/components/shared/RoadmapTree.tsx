"use client";

import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

import { VoteButtons } from "@/components/shared/VoteButtons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import type { RoadmapNode, RoadmapTreeNode } from "@/types/roadmap";
import { buildRoadmapTree } from "@/utils/roadmap-tree";

interface RoadmapTreeProps {
  nodes: RoadmapNode[];
  initialVotes: number;
  coinPrice: number;
}

function TreeBranch({
  node,
  onSelect,
  getTitle,
}: {
  node: RoadmapTreeNode;
  onSelect: (node: RoadmapNode) => void;
  getTitle: (key: string) => string;
}) {
  const hasChildren = node.children.length > 0;

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={() => onSelect(node)}
        className={cn(
          "min-w-[9rem] max-w-[11rem] rounded-lg border px-3 py-2 text-center text-sm font-medium transition-colors hover:bg-muted/60",
          node.nodeType === "root" && "border-primary bg-primary/10 text-primary",
          node.nodeType === "optional" && "border-dashed text-muted-foreground",
          node.nodeType === "subtopic" && "border-amber-500/40 bg-amber-500/5",
          !node.nodeType || node.nodeType === "topic"
            ? "border-border bg-card"
            : undefined,
        )}
      >
        {getTitle(node.titleKey)}
      </button>

      {hasChildren ? (
        <div className="flex flex-col items-center">
          <div className="h-6 w-px bg-border" />
          <div className="relative flex items-start justify-center gap-6 px-2">
            {node.children.length > 1 ? (
              <div
                className="absolute top-0 h-px bg-border"
                style={{
                  left: "12%",
                  right: "12%",
                }}
              />
            ) : null}
            {node.children.map((child) => (
              <div key={child.id} className="flex flex-col items-center pt-0">
                <div className="h-4 w-px bg-border" />
                <TreeBranch
                  node={child}
                  onSelect={onSelect}
                  getTitle={getTitle}
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function RoadmapTree({
  nodes,
  initialVotes,
  coinPrice,
}: RoadmapTreeProps) {
  const t = useTranslations("roadmapPage");
  const tNodes = useTranslations("roadmapNodes");
  const tVote = useTranslations("vote");
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null);

  const tree = useMemo(() => buildRoadmapTree(nodes), [nodes]);

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <VoteButtons
          initialVotes={initialVotes}
          upvoteLabel={tVote("upvote")}
          downvoteLabel={tVote("downvote")}
        />
        <Badge variant="outline">{t("coinPrice", { coin: coinPrice })}</Badge>
      </div>

      <div className="overflow-x-auto rounded-xl border bg-muted/20 p-6 sm:p-10">
        {tree ? (
          <div className="flex min-w-max justify-center">
            <TreeBranch
              node={tree}
              onSelect={setSelectedNode}
              getTitle={(key) => tNodes(`${key}.title`)}
            />
          </div>
        ) : null}
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        {t("treeHint")}
      </p>

      <Sheet
        open={selectedNode !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedNode(null);
        }}
      >
        <SheetContent side="right" className="w-full sm:max-w-md">
          {selectedNode ? (
            <>
              <SheetHeader>
                <SheetTitle>
                  {tNodes(`${selectedNode.titleKey}.title`)}
                </SheetTitle>
                <SheetDescription>{t("materialTitle")}</SheetDescription>
              </SheetHeader>
              <div className="space-y-4 px-4 pb-4">
                <p className="text-sm text-muted-foreground">
                  {tNodes(`${selectedNode.titleKey}.description`)}
                </p>
                <p className="text-sm leading-relaxed">
                  {tNodes(`${selectedNode.titleKey}.material`)}
                </p>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => setSelectedNode(null)}
                >
                  {t("closeMaterial")}
                </Button>
              </div>
            </>
          ) : null}
        </SheetContent>
      </Sheet>
    </>
  );
}
