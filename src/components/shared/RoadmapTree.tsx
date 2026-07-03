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
import type { RoadmapNode, RoadmapNodeType, RoadmapTreeNode } from "@/types/roadmap";
import { buildRoadmapTree } from "@/utils/roadmap-tree";

interface RoadmapTreeProps {
  nodes: RoadmapNode[];
  initialVotes: number;
  coinPrice: number;
}

function nodeStyles(nodeType?: RoadmapNodeType) {
  switch (nodeType) {
    case "root":
      return "border-violet-600 bg-violet-600 text-white shadow-violet-600/30 hover:bg-violet-500 dark:border-violet-400 dark:bg-violet-500 dark:hover:bg-violet-400";
    case "optional":
      return "border-dashed border-slate-400 bg-slate-100 text-slate-600 hover:bg-slate-200 dark:border-slate-500 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700";
    case "subtopic":
      return "border-amber-500 bg-amber-400 text-amber-950 shadow-amber-500/25 hover:bg-amber-300 dark:border-amber-400 dark:bg-amber-500 dark:text-amber-950 dark:hover:bg-amber-400";
    default:
      return "border-teal-600 bg-teal-500 text-white shadow-teal-600/25 hover:bg-teal-400 dark:border-teal-400 dark:bg-teal-500 dark:hover:bg-teal-400";
  }
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
          "min-w-[10rem] max-w-[12rem] rounded-full border-2 px-4 py-2.5 text-center text-sm font-bold shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0",
          nodeStyles(node.nodeType),
        )}
      >
        {getTitle(node.titleKey)}
      </button>

      {hasChildren ? (
        <div className="flex flex-col items-center">
          <div className="h-7 w-1 rounded-full bg-gradient-to-b from-violet-400 to-teal-400 dark:from-violet-500 dark:to-teal-500" />
          <div className="relative flex items-start justify-center gap-8 px-2">
            {node.children.length > 1 ? (
              <div
                className="absolute top-0 h-1 rounded-full bg-gradient-to-r from-violet-400 via-teal-400 to-amber-400 dark:from-violet-500 dark:via-teal-500 dark:to-amber-500"
                style={{
                  left: "14%",
                  right: "14%",
                }}
              />
            ) : null}
            {node.children.map((child) => (
              <div key={child.id} className="flex flex-col items-center pt-0">
                <div className="h-5 w-1 rounded-full bg-teal-400 dark:bg-teal-500" />
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
        <Badge className="border-fun/40 bg-fun/20 font-bold text-fun-foreground">
          {t("coinPrice", { coin: coinPrice })}
        </Badge>
      </div>

      <div className="overflow-x-auto rounded-2xl border-2 border-primary/15 bg-gradient-to-br from-violet-50 via-white to-teal-50 p-6 shadow-inner sm:p-10 dark:from-violet-950/40 dark:via-background dark:to-teal-950/30">
        {tree ? (
          <div className="flex min-w-max justify-center py-2">
            <TreeBranch
              node={tree}
              onSelect={setSelectedNode}
              getTitle={(key) => tNodes(`${key}.title`)}
            />
          </div>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
        <span className="inline-flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-violet-600" />
          {t("legendRoot")}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-teal-500" />
          {t("legendTopic")}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-amber-400" />
          {t("legendSubtopic")}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-3 rounded-full border-2 border-dashed border-slate-400 bg-slate-100" />
          {t("legendOptional")}
        </span>
      </div>

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
                <SheetTitle className="font-extrabold">
                  {tNodes(`${selectedNode.titleKey}.title`)}
                </SheetTitle>
                <SheetDescription className="font-semibold text-primary">
                  {t("materialTitle")}
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-4 px-4 pb-4">
                <p className="text-sm font-semibold text-muted-foreground">
                  {tNodes(`${selectedNode.titleKey}.description`)}
                </p>
                <p className="text-sm leading-relaxed font-medium">
                  {tNodes(`${selectedNode.titleKey}.material`)}
                </p>
                <Button
                  className="w-full font-bold"
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
