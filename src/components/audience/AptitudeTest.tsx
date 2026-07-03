"use client";

import { ClipboardCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

import { APTITUDE_QUESTIONS, scoreAptitudeTest } from "@/data/aptitude-test";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { categoryIconMap } from "@/lib/category-icons";
import type { CategoryIcon } from "@/lib/category-icons";

const CATEGORY_TO_CAREER: Record<string, string> = {
  it: "become-engineer",
  architecture: "become-architect",
  healthcare: "become-nurse",
  creative: "become-designer",
  business: "become-marketer",
  finance: "become-financial-analyst",
};

const CATEGORY_ICONS: Record<string, CategoryIcon> = {
  architecture: "architecture",
  it: "it",
  finance: "finance",
  healthcare: "healthcare",
  creative: "creative",
  business: "business",
};

export function AptitudeTest() {
  const t = useTranslations("aptitudeTest");
  const tCategories = useTranslations("categories");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = APTITUDE_QUESTIONS[step];
  const progress = isFinished
    ? 100
    : Math.round((step / APTITUDE_QUESTIONS.length) * 100);

  const topCategories = useMemo(() => {
    if (!isFinished) return [];
    return scoreAptitudeTest(answers);
  }, [answers, isFinished]);

  const handleSelect = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleNext = () => {
    if (!currentQuestion || !answers[currentQuestion.id]) return;

    if (step === APTITUDE_QUESTIONS.length - 1) {
      setIsFinished(true);
      return;
    }

    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (isFinished) {
      setIsFinished(false);
      setStep(APTITUDE_QUESTIONS.length - 1);
      return;
    }

    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleRestart = () => {
    setAnswers({});
    setStep(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardCheck className="size-5 text-primary" />
            {t("resultTitle")}
          </CardTitle>
          <CardDescription>{t("resultDescription")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {topCategories.map((categorySlug, index) => {
              const iconKey = CATEGORY_ICONS[categorySlug];
              const Icon = iconKey ? categoryIconMap[iconKey] : null;

              const careerSlug = CATEGORY_TO_CAREER[categorySlug];
              const href = careerSlug
                ? `/sma-smk/careers/${careerSlug}`
                : "/sma-smk/careers";

              return (
                <Link
                  key={categorySlug}
                  href={href}
                  className="block"
                >
                  <Card className="h-full transition-colors hover:bg-muted/40">
                    <CardHeader className="pb-2">
                      <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                        {t("rankLabel", { rank: index + 1 })}
                      </p>
                      <CardTitle className="flex items-center gap-2 text-base">
                        {Icon ? (
                          <Icon className="size-4 shrink-0 text-primary" />
                        ) : null}
                        {tCategories(categorySlug)}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleRestart} variant="outline">
              {t("retake")}
            </Button>
            <Button render={<Link href="/sma-smk/careers" />}>
              {t("exploreRoadmaps")}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="space-y-2">
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {t("progress", {
                current: step + 1,
                total: APTITUDE_QUESTIONS.length,
              })}
            </span>
            <span>{progress}%</span>
          </div>
          <div
            className="h-2 overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">
            {t(`questions.${currentQuestion.titleKey}`)}
          </h2>
          <div className="grid gap-2">
            {currentQuestion.options.map((option) => {
              const isSelected = answers[currentQuestion.id] === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelect(currentQuestion.id, option.id)}
                  className={`rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                    isSelected
                      ? "border-primary bg-primary/5 font-medium"
                      : "hover:bg-muted/50"
                  }`}
                >
                  {t(`questions.${option.labelKey}`)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={step === 0}
          >
            {t("back")}
          </Button>
          <Button
            onClick={handleNext}
            disabled={!answers[currentQuestion.id]}
          >
            {step === APTITUDE_QUESTIONS.length - 1 ? t("finish") : t("next")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
