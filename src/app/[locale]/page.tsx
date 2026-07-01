import { getTranslations, setRequestLocale } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("homePage");

  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-16 sm:px-6 sm:py-24">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {t("heroTitle")}
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          {t("heroSubtitle")}
        </p>
      </div>
      <Button render={<Link href="/" />}>{t("ctaExplore")}</Button>
    </section>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
