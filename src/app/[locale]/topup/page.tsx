import { getTranslations, setRequestLocale } from "next-intl/server";

import { CoinPackageGrid } from "@/components/coins/CoinPackageGrid";
import { MOCK_COIN_PACKAGES } from "@/data/coins";
import { routing } from "@/i18n/routing";

export default async function TopUpPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("topUpPage");

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8 max-w-2xl space-y-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t("title")}
        </h1>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </div>

      <CoinPackageGrid packages={MOCK_COIN_PACKAGES} />
    </section>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
