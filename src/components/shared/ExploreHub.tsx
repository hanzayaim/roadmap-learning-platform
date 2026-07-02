"use client";

import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

import {
  CategoryCardClient,
  RoadmapCardClient,
} from "@/components/shared/ExploreCardsClient";
import { Input } from "@/components/ui/input";
import type { Category, Roadmap } from "@/types/roadmap";
import { countRoadmapNodes } from "@/utils/roadmap-tree";

interface ExploreHubProps {
  categories: Array<Category & { roadmapCount: number }>;
  trendingRoadmaps: Roadmap[];
}

export function ExploreHub({ categories, trendingRoadmaps }: ExploreHubProps) {
  const [query, setQuery] = useState("");
  const t = useTranslations("explorePage");
  const tCategories = useTranslations("categories");
  const tRoadmaps = useTranslations("roadmaps");
  const tVote = useTranslations("vote");

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return categories;

    return categories.filter((category) =>
      tCategories(category.titleKey).toLowerCase().includes(normalizedQuery),
    );
  }, [categories, query, tCategories]);

  const filteredTrending = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return trendingRoadmaps;

    return trendingRoadmaps.filter((roadmap) => {
      const title = tRoadmaps(roadmap.titleKey).toLowerCase();
      const description = tRoadmaps(roadmap.descriptionKey).toLowerCase();
      return (
        title.includes(normalizedQuery) || description.includes(normalizedQuery)
      );
    });
  }, [query, trendingRoadmaps, tRoadmaps]);

  const hasResults =
    filteredCategories.length > 0 || filteredTrending.length > 0;

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <div className="relative max-w-xl">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("searchPlaceholder")}
            className="pl-9"
            aria-label={t("searchPlaceholder")}
          />
        </div>
      </section>

      {!hasResults ? (
        <p className="text-sm text-muted-foreground">
          {t("noResults", { query })}
        </p>
      ) : null}

      {filteredCategories.length > 0 ? (
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              {t("categoriesTitle")}
            </h2>
            <p className="text-muted-foreground">{t("categoriesDescription")}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCategories.map((category) => (
              <CategoryCardClient
                key={category.slug}
                href={`/category/${category.slug}`}
                title={tCategories(category.titleKey)}
                roadmapCountLabel={t("roadmapCount", {
                  count: category.roadmapCount,
                })}
                icon={category.icon}
              />
            ))}
          </div>
        </section>
      ) : null}

      {filteredTrending.length > 0 ? (
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              {t("trendingTitle")}
            </h2>
            <p className="text-muted-foreground">{t("trendingDescription")}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {filteredTrending.map((roadmap) => (
              <RoadmapCardClient
                key={roadmap.slug}
                href={`/roadmap/${roadmap.slug}`}
                title={tRoadmaps(roadmap.titleKey)}
                description={tRoadmaps(roadmap.descriptionKey)}
                nodeCountLabel={t("nodeCount", {
                  count: countRoadmapNodes(roadmap.nodes),
                })}
                initialVotes={roadmap.initialVotes}
                viewRoadmapLabel={t("viewRoadmap")}
                upvoteLabel={tVote("upvote")}
                downvoteLabel={tVote("downvote")}
              />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
