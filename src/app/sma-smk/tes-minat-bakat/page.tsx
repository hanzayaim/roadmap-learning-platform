import { getTranslations } from "next-intl/server";

import { AptitudeTest } from "@/components/audience/AptitudeTest";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default async function AptitudeTestPage() {
  const t = await getTranslations("aptitudeTest");

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="mb-8 space-y-4">
        <Button variant="ghost" size="sm" render={<Link href="/sma-smk" />}>
          {t("backToSmaSmk")}
        </Button>
        <div className="space-y-2">
          <p className="text-sm font-medium text-primary">{t("badge")}</p>
          <h1 className="text-3xl font-bold tracking-tight">{t("pageTitle")}</h1>
          <p className="text-muted-foreground">{t("pageSubtitle")}</p>
        </div>
      </div>

      <AptitudeTest />
    </div>
  );
}

