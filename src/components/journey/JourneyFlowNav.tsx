import {
  AUDIENCE_BASE_PATH,
  getJourneySteps,
  getNextStep,
  getStepPath,
  type JourneyStepId,
} from "@/data/journey";
import type { Audience } from "@/types/audience";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

interface JourneyFlowNavProps {
  audience: Audience;
  currentStep: JourneyStepId;
}

export async function JourneyFlowNav({
  audience,
  currentStep,
}: JourneyFlowNavProps) {
  const t = await getTranslations("journey");
  const steps = getJourneySteps(audience);
  const currentIndex = steps.findIndex((step) => step.id === currentStep);

  return (
    <nav aria-label={t("flowLabel")} className="mb-8">
      <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isComplete = index < currentIndex;
          const href = getStepPath(audience, step.id);

          return (
            <li key={step.id} className="flex items-center gap-2 sm:gap-3">
              {index > 0 ? (
                <span className="hidden text-muted-foreground sm:inline">→</span>
              ) : null}
              <Link
                href={href}
                className={cn(
                  "flex items-center gap-2 rounded-full border-2 px-3 py-2 text-sm font-bold transition-all",
                  isActive
                    ? "border-violet-500 bg-violet-600 text-white shadow-md shadow-violet-500/25"
                    : isComplete
                      ? "border-teal-400 bg-teal-50 text-teal-800 hover:bg-teal-100 dark:border-teal-600 dark:bg-teal-950/50 dark:text-teal-200 dark:hover:bg-teal-900/50"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:bg-muted/40",
                )}
              >
                <span
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-extrabold",
                    isActive
                      ? "bg-white/20 text-white"
                      : isComplete
                        ? "bg-teal-500 text-white"
                        : "bg-muted text-muted-foreground",
                  )}
                >
                  {index + 1}
                </span>
                <span>{t(step.titleKey)}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

interface JourneyContinueProps {
  audience: Audience;
  currentStep: JourneyStepId;
}

export async function JourneyContinue({
  audience,
  currentStep,
}: JourneyContinueProps) {
  const t = await getTranslations("journey");
  const nextStep = getNextStep(audience, currentStep);
  if (!nextStep) return null;

  return (
    <div className="mt-10 flex justify-end">
      <Link
        href={getStepPath(audience, nextStep)}
        className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-teal-500 px-5 text-sm font-extrabold text-white shadow-md shadow-violet-500/20 transition-transform hover:-translate-y-0.5 hover:opacity-95"
      >
        {t("continueTo", { step: t(JOURNEY_STEP_TITLE_KEY[nextStep]) })}
      </Link>
    </div>
  );
}

const JOURNEY_STEP_TITLE_KEY: Record<JourneyStepId, string> = {
  backstory: "backstoryTitle",
  "thought-process": "thoughtProcessTitle",
  careers: "careersTitle",
  fields: "fieldsTitle",
};

export function getAudienceHubPath(audience: Audience) {
  return AUDIENCE_BASE_PATH[audience];
}
