import { getTranslations } from "next-intl/server";

import { JourneyStepLayout } from "@/components/journey/JourneyStepLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";

export default async function SmaSmkThoughtProcessPage() {
  const t = await getTranslations("journey");
  const tAudience = await getTranslations("audience");

  return (
    <JourneyStepLayout
      audience="sma-smk"
      currentStep="thought-process"
      badgeKey={tAudience("smaSmkBadge")}
      title={t("smaSmkThoughtTitle")}
      subtitle={t("smaSmkThoughtSubtitle")}
    >
      <div className="max-w-3xl space-y-6">
        <div className="space-y-4 text-muted-foreground">
          <p>{t("smaSmkThoughtP1")}</p>
          <p>{t("smaSmkThoughtP2")}</p>
        </div>

        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <CardTitle>{tAudience("aptitudeTestTitle")}</CardTitle>
              <CardDescription>
                {tAudience("aptitudeTestDescription")}
              </CardDescription>
            </div>
            <Button render={<Link href="/sma-smk/tes-minat-bakat" />}>
              {tAudience("startAptitudeTest")}
            </Button>
          </CardHeader>
        </Card>

        <ul className="grid gap-3 sm:grid-cols-3">
          {[1, 2, 3].map((step) => (
            <li
              key={step}
              className="rounded-lg border bg-muted/20 px-4 py-3 text-sm"
            >
              <p className="font-medium">{t(`smaSmkThoughtStep${step}Title`)}</p>
              <p className="mt-1 text-muted-foreground">
                {t(`smaSmkThoughtStep${step}Desc`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </JourneyStepLayout>
  );
}

