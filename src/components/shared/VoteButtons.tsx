"use client";

import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VoteButtonsProps {
  initialVotes: number;
  upvoteLabel: string;
  downvoteLabel: string;
  className?: string;
}

export function VoteButtons({
  initialVotes,
  upvoteLabel,
  downvoteLabel,
  className,
}: VoteButtonsProps) {
  const [votes, setVotes] = useState(initialVotes);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Button
        type="button"
        variant="outline"
        size="sm"
        aria-label={upvoteLabel}
        onClick={() => setVotes((current) => current + 1)}
      >
        <ThumbsUp className="size-4" />
      </Button>
      <span className="min-w-8 text-center text-sm font-medium">{votes}</span>
      <Button
        type="button"
        variant="outline"
        size="sm"
        aria-label={downvoteLabel}
        onClick={() => setVotes((current) => Math.max(0, current - 1))}
      >
        <ThumbsDown className="size-4" />
      </Button>
    </div>
  );
}
