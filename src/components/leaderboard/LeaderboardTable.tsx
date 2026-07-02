"use client";

import { Trophy } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MOCK_LEADERBOARD } from "@/data/leaderboard";
import type { LeaderboardPeriod } from "@/types/coin";

const periods: LeaderboardPeriod[] = ["weekly", "monthly", "yearly"];

export function LeaderboardTable() {
  const t = useTranslations("leaderboardPage");
  const [period, setPeriod] = useState<LeaderboardPeriod>("weekly");

  const entries = useMemo(() => MOCK_LEADERBOARD[period], [period]);

  return (
    <Tabs
      value={period}
      onValueChange={(value) => setPeriod(value as LeaderboardPeriod)}
      className="gap-6"
    >
      <TabsList>
        {periods.map((item) => (
          <TabsTrigger key={item} value={item}>
            {t(`tabs.${item}`)}
          </TabsTrigger>
        ))}
      </TabsList>

      {periods.map((item) => (
        <TabsContent key={item} value={item}>
          <div className="overflow-hidden rounded-lg border">
            <div className="hidden grid-cols-[4rem_1fr_6rem] gap-4 border-b bg-muted/40 px-4 py-3 text-sm font-medium sm:grid">
              <span>{t("rankColumn")}</span>
              <span>{t("learnerColumn")}</span>
              <span className="text-right">{t("pointsColumn")}</span>
            </div>
            <ul className="divide-y">
              {entries.map((entry) => (
                <li
                  key={`${item}-${entry.rank}-${entry.name}`}
                  className="grid gap-3 px-4 py-4 sm:grid-cols-[4rem_1fr_6rem] sm:items-center sm:gap-4"
                >
                  <div className="flex items-center gap-2 sm:block">
                    <span className="text-xs font-medium text-muted-foreground sm:hidden">
                      {t("rankColumn")}
                    </span>
                    <Badge
                      variant={entry.rank <= 3 ? "default" : "secondary"}
                      className="gap-1"
                    >
                      {entry.rank <= 3 ? <Trophy className="size-3" /> : null}
                      #{entry.rank}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-9">
                      <AvatarFallback>{entry.avatarInitials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium sm:text-base">
                        {entry.name}
                      </p>
                      <p className="text-xs text-muted-foreground sm:hidden">
                        {t("pointsValue", { count: entry.points })}
                      </p>
                    </div>
                  </div>
                  <p className="hidden text-right text-sm font-semibold sm:block">
                    {t("pointsValue", { count: entry.points })}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
