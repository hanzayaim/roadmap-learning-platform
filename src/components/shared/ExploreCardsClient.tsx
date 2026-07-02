"use client";

import { VoteButtons } from "@/components/shared/VoteButtons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { categoryIconMap, type CategoryIcon } from "@/lib/category-icons";

interface RoadmapCardClientProps {
  href: string;
  title: string;
  description: string;
  nodeCountLabel: string;
  initialVotes: number;
  viewRoadmapLabel: string;
  upvoteLabel: string;
  downvoteLabel: string;
}

export function RoadmapCardClient({
  href,
  title,
  description,
  nodeCountLabel,
  initialVotes,
  viewRoadmapLabel,
  upvoteLabel,
  downvoteLabel,
}: RoadmapCardClientProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <Badge variant="secondary">{nodeCountLabel}</Badge>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <VoteButtons
          initialVotes={initialVotes}
          upvoteLabel={upvoteLabel}
          downvoteLabel={downvoteLabel}
        />
        <Button
          size="sm"
          className="w-full sm:w-auto"
          render={<Link href={href} />}
        >
          {viewRoadmapLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}

interface CategoryCardClientProps {
  href: string;
  title: string;
  roadmapCountLabel: string;
  icon: CategoryIcon;
}

export function CategoryCardClient({
  href,
  title,
  roadmapCountLabel,
  icon,
}: CategoryCardClientProps) {
  const Icon = categoryIconMap[icon];

  return (
    <Link href={href}>
      <Card className="h-full transition-colors hover:bg-muted/40">
        <CardHeader>
          <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-5" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{roadmapCountLabel}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
