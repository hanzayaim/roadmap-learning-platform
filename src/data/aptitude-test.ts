import type { Audience } from "@/types/audience";

export interface AptitudeOption {
  id: string;
  labelKey: string;
  categoryWeights: Partial<Record<string, number>>;
}

export interface AptitudeQuestion {
  id: string;
  titleKey: string;
  options: AptitudeOption[];
}

export const APTITUDE_QUESTIONS: AptitudeQuestion[] = [
  {
    id: "q1",
    titleKey: "q1",
    options: [
      {
        id: "q1a",
        labelKey: "q1a",
        categoryWeights: { creative: 3, architecture: 1 },
      },
      {
        id: "q1b",
        labelKey: "q1b",
        categoryWeights: { it: 3, finance: 1 },
      },
      {
        id: "q1c",
        labelKey: "q1c",
        categoryWeights: { healthcare: 3, business: 1 },
      },
      {
        id: "q1d",
        labelKey: "q1d",
        categoryWeights: { architecture: 3, creative: 1 },
      },
    ],
  },
  {
    id: "q2",
    titleKey: "q2",
    options: [
      {
        id: "q2a",
        labelKey: "q2a",
        categoryWeights: { it: 2, finance: 2 },
      },
      {
        id: "q2b",
        labelKey: "q2b",
        categoryWeights: { creative: 3, business: 1 },
      },
      {
        id: "q2c",
        labelKey: "q2c",
        categoryWeights: { healthcare: 3 },
      },
      {
        id: "q2d",
        labelKey: "q2d",
        categoryWeights: { business: 2, finance: 2 },
      },
    ],
  },
  {
    id: "q3",
    titleKey: "q3",
    options: [
      {
        id: "q3a",
        labelKey: "q3a",
        categoryWeights: { architecture: 3, creative: 1 },
      },
      {
        id: "q3b",
        labelKey: "q3b",
        categoryWeights: { it: 3 },
      },
      {
        id: "q3c",
        labelKey: "q3c",
        categoryWeights: { healthcare: 2, business: 2 },
      },
      {
        id: "q3d",
        labelKey: "q3d",
        categoryWeights: { finance: 3, business: 1 },
      },
    ],
  },
  {
    id: "q4",
    titleKey: "q4",
    options: [
      {
        id: "q4a",
        labelKey: "q4a",
        categoryWeights: { creative: 3 },
      },
      {
        id: "q4b",
        labelKey: "q4b",
        categoryWeights: { it: 2, architecture: 2 },
      },
      {
        id: "q4c",
        labelKey: "q4c",
        categoryWeights: { business: 3 },
      },
      {
        id: "q4d",
        labelKey: "q4d",
        categoryWeights: { healthcare: 3, creative: 1 },
      },
    ],
  },
  {
    id: "q5",
    titleKey: "q5",
    options: [
      {
        id: "q5a",
        labelKey: "q5a",
        categoryWeights: { architecture: 2, creative: 2 },
      },
      {
        id: "q5b",
        labelKey: "q5b",
        categoryWeights: { finance: 3 },
      },
      {
        id: "q5c",
        labelKey: "q5c",
        categoryWeights: { it: 3, business: 1 },
      },
      {
        id: "q5d",
        labelKey: "q5d",
        categoryWeights: { healthcare: 2, business: 2 },
      },
    ],
  },
  {
    id: "q6",
    titleKey: "q6",
    options: [
      {
        id: "q6a",
        labelKey: "q6a",
        categoryWeights: { business: 3, marketing: 1 },
      },
      {
        id: "q6b",
        labelKey: "q6b",
        categoryWeights: { it: 2, creative: 2 },
      },
      {
        id: "q6c",
        labelKey: "q6c",
        categoryWeights: { healthcare: 3 },
      },
      {
        id: "q6d",
        labelKey: "q6d",
        categoryWeights: { finance: 2, business: 2 },
      },
    ],
  },
];

export function scoreAptitudeTest(
  answers: Record<string, string>,
): string[] {
  const scores: Record<string, number> = {};

  for (const question of APTITUDE_QUESTIONS) {
    const selectedId = answers[question.id];
    const option = question.options.find((item) => item.id === selectedId);
    if (!option) continue;

    for (const [category, weight] of Object.entries(option.categoryWeights)) {
      if (weight === undefined) continue;
      scores[category] = (scores[category] ?? 0) + weight;
    }
  }

  return Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([category]) => category);
}

export const APTITUDE_AUDIENCE: Audience = "sma-smk";
