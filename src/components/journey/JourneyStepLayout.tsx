import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

import {
  JourneyContinue,
  JourneyFlowNav,
  getAudienceHubPath,
} from "@/components/journey/JourneyFlowNav";
import { Button } from "@/components/ui/button";
import type { JourneyStepId } from "@/data/journey";
import { Link } from "@/i18n/navigation";
import type { Audience } from "@/types/audience";

interface JourneyStepLayoutProps {
  audience: Audience;
  currentStep: JourneyStepId;
  badgeKey: string;
  title: string;
  subtitle: string;
  backHref?: string;
  backLabel?: string;
  children: ReactNode;
}

export async function JourneyStepLayout({
  audience,
  currentStep,
  badgeKey,
  title,
  subtitle,
  backHref,
  backLabel,
  children,
}: JourneyStepLayoutProps) {
  const t = await getTranslations("journey");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="mb-6">
        <Button
          variant="ghost"
          size="sm"
          render={<Link href={backHref ?? getAudienceHubPath(audience)} />}
        >
          <ArrowLeft className="size-4" />
          {backLabel ?? t("backToHub")}
        </Button>
      </div>

      <JourneyFlowNav audience={audience} currentStep={currentStep} />

      <header className="mb-10 max-w-3xl space-y-3">
        <p className="text-sm font-medium text-primary">{badgeKey}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      </header>

      {children}

      <JourneyContinue audience={audience} currentStep={currentStep} />
    </div>
  );
}
