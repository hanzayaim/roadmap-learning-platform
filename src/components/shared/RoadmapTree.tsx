"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

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
import type { RoadmapNode } from "@/types/roadmap";

interface RoadmapTreeProps {
  nodes: RoadmapNode[];
  initialVotes: number;
  coinPrice: number;
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

  const sortedNodes = [...nodes].sort((a, b) => a.order - b.order);

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

      <ol className="relative space-y-0 border-l border-border pl-6">
        {sortedNodes.map((node, index) => (
          <li key={node.id} className="relative pb-8 last:pb-0">
            <span className="absolute top-1 -left-[1.65rem] flex size-6 items-center justify-center rounded-full border bg-background text-xs font-medium">
              {index + 1}
            </span>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-medium">{tNodes(`${node.titleKey}.title`)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {tNodes(`${node.titleKey}.description`)}
              </p>
              <Button
                className="mt-3"
                size="sm"
                variant="outline"
                onClick={() => setSelectedNode(node)}
              >
                {t("openMaterial")}
              </Button>
            </div>
          </li>
        ))}
      </ol>

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
              <div className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                {tNodes(`${selectedNode.titleKey}.material`)}
              </div>
            </>
          ) : null}
        </SheetContent>
      </Sheet>
    </>
  );
}
