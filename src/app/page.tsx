import { getTranslations } from "next-intl/server";

import { AudienceSelector } from "@/components/audience/AudienceSelector";

export default async function HomePage() {
  const t = await getTranslations("homePage");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="mb-10 max-w-3xl space-y-4">
        <h1 className="bg-gradient-to-r from-violet-700 via-primary to-teal-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl dark:from-violet-300 dark:via-primary dark:to-teal-300">
          {t("heroTitle")}
        </h1>
        <p className="text-base font-semibold text-muted-foreground sm:text-lg">
          {t("heroSubtitle")}
        </p>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">
            {t("audienceTitle")}
          </h2>
          <p className="font-medium text-muted-foreground">
            {t("audienceDescription")}
          </p>
        </div>
        <AudienceSelector />
      </section>
    </div>
  );
}

