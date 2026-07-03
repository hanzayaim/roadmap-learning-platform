import { ClipboardList } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { JourneyFlowNav } from "@/components/journey/JourneyFlowNav";
import { getStepPath } from "@/data/journey";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";

export default async function SmaSmkPage() {
  const t = await getTranslations("audience");
  const tJourney = await getTranslations("journey");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="mb-10 max-w-3xl space-y-4">
        <p className="text-sm font-medium text-primary">{t("smaSmkBadge")}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t("smaSmkTitle")}
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          {t("smaSmkPageSubtitle")}
        </p>
        <p className="text-sm font-medium">
          {t("focusLabel")}: {t("smaSmkFocus")}
        </p>
      </section>

      <JourneyFlowNav audience="sma-smk" currentStep="backstory" />

      <Card className="mb-8 border-primary/20 bg-primary/5">
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <CardTitle>{tJourney("hubStartTitle")}</CardTitle>
            <CardDescription>{tJourney("smaSmkHubStartDesc")}</CardDescription>
          </div>
          <Button render={<Link href={getStepPath("sma-smk", "backstory")} />}>
            {tJourney("startJourney")}
          </Button>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              <ClipboardList className="size-5 text-primary" />
              {t("aptitudeTestTitle")}
            </CardTitle>
            <CardDescription>{t("aptitudeTestDescription")}</CardDescription>
          </div>
          <Button
            variant="outline"
            render={<Link href="/sma-smk/tes-minat-bakat" />}
          >
            {t("startAptitudeTest")}
          </Button>
        </CardHeader>
      </Card>
    </div>
  );
}

