import { getTranslations } from "next-intl/server";

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
import { categoryIconMap } from "@/lib/category-icons";
import type { CategoryIcon } from "@/lib/category-icons";
import type { Audience } from "@/types/audience";
import type { Roadmap } from "@/types/roadmap";
import { countRoadmapNodes } from "@/utils/roadmap-tree";

interface RoadmapCardProps {
  roadmap: Roadmap;
}

export async function RoadmapCard({ roadmap }: RoadmapCardProps) {
  const t = await getTranslations("roadmaps");
  const tExplore = await getTranslations("explorePage");
  const tVote = await getTranslations("vote");

  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{t(roadmap.titleKey)}</CardTitle>
        <CardDescription>{t(roadmap.descriptionKey)}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <Badge variant="secondary">
          {tExplore("nodeCount", { count: countRoadmapNodes(roadmap.nodes) })}
        </Badge>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <VoteButtons
          initialVotes={roadmap.initialVotes}
          upvoteLabel={tVote("upvote")}
          downvoteLabel={tVote("downvote")}
        />
        <Button
          size="sm"
          className="w-full sm:w-auto"
          render={<Link href={`/roadmap/${roadmap.slug}`} />}
        >
          {tExplore("viewRoadmap")}
        </Button>
      </CardFooter>
    </Card>
  );
}

interface CategoryCardProps {
  slug: string;
  titleKey: string;
  icon: CategoryIcon;
  roadmapCount: number;
}

export async function CategoryCard({
  slug,
  titleKey,
  icon,
  roadmapCount,
}: CategoryCardProps) {
  const t = await getTranslations("categories");
  const tExplore = await getTranslations("explorePage");
  const Icon = categoryIconMap[icon];

  return (
    <Link href={`/category/${slug}`}>
      <Card className="h-full transition-colors hover:bg-muted/40">
        <CardHeader>
          <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-5" />
          </div>
          <CardTitle className="text-lg">{t(titleKey)}</CardTitle>
          <CardDescription>
            {tExplore("roadmapCount", { count: roadmapCount })}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

interface SubcategoryCardProps {
  categorySlug: string;
  slug: string;
  titleKey: string;
  roadmapCount: number;
  audience?: Audience;
}

export async function SubcategoryCard({
  categorySlug,
  slug,
  titleKey,
  roadmapCount,
  audience,
}: SubcategoryCardProps) {
  const t = await getTranslations("subcategories");
  const tExplore = await getTranslations("explorePage");
  const href = audience
    ? `/category/${categorySlug}/${slug}?audience=${audience}`
    : `/category/${categorySlug}/${slug}`;

  return (
    <Link href={href}>
      <Card className="h-full transition-colors hover:bg-muted/40">
        <CardHeader>
          <CardTitle className="text-lg">{t(titleKey)}</CardTitle>
          <CardDescription>
            {tExplore("roadmapCount", { count: roadmapCount })}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
