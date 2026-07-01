import { getTranslations, setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";

export default async function LeaderboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("leaderboardPage");

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
        {t("title")}
      </h1>
      <p className="mt-2 text-muted-foreground">{t("comingSoon")}</p>
    </section>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
