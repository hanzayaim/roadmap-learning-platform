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

export default async function CollegePage() {
  const t = await getTranslations("audience");
  const tJourney = await getTranslations("journey");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="mb-10 max-w-3xl space-y-4">
        <p className="text-sm font-medium text-primary">{t("collegeBadge")}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t("collegeTitle")}
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          {t("collegePageSubtitle")}
        </p>
        <p className="text-sm font-medium">
          {t("focusLabel")}: {t("collegeFocus")}
        </p>
      </section>

      <JourneyFlowNav audience="college" currentStep="backstory" />

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <CardTitle>{tJourney("hubStartTitle")}</CardTitle>
            <CardDescription>{tJourney("collegeHubStartDesc")}</CardDescription>
          </div>
          <Button render={<Link href={getStepPath("college", "backstory")} />}>
            {tJourney("startJourney")}
          </Button>
        </CardHeader>
      </Card>
    </div>
  );
}

