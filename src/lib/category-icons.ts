import {
  Briefcase,
  Building2,
  Code,
  HeartPulse,
  Landmark,
  Palette,
} from "lucide-react";

export const categoryIconMap = {
  architecture: Building2,
  it: Code,
  finance: Landmark,
  healthcare: HeartPulse,
  creative: Palette,
  business: Briefcase,
} as const;

export type CategoryIcon = keyof typeof categoryIconMap;
