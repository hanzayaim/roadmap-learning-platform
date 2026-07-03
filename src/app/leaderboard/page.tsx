import { getTranslations } from "next-intl/server";

import { LeaderboardTable } from "@/components/leaderboard/LeaderboardTable";

export default async function LeaderboardPage() {
  const t = await getTranslations("leaderboardPage");

  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t("title")}
        </h1>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </div>

      <LeaderboardTable />
    </section>
  );
}

