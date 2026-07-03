import { BookOpen, Briefcase, Code, DollarSign, Layers, TrendingUp } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { FieldModuleLink } from "@/data/journey";
import type { Audience } from "@/types/audience";
import { getTranslations } from "next-intl/server";

const MODULE_ICONS: Record<string, typeof BookOpen> = {
  fundamentals: Layers,
  technical: Code,
  "work-insight": Briefcase,
  "earning-insight": DollarSign,
  prospects: TrendingUp,
  "specific-technical": Code,
};

interface FieldModuleGridProps {
  audience: Audience;
  fieldSlug: string;
  modules: FieldModuleLink[];
}

export async function FieldModuleGrid({
  audience,
  fieldSlug,
  modules,
}: FieldModuleGridProps) {
  const t = await getTranslations("journey");

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {modules.map((module, index) => {
        const Icon = MODULE_ICONS[module.id] ?? BookOpen;
        const audiencePath = audience === "work" ? "kerja" : audience;
        const href = module.roadmapSlug
          ? `/roadmap/${module.roadmapSlug}`
          : `/${audiencePath}/fields/${fieldSlug}/${module.id}`;

        return (
          <Link key={module.id} href={href}>
            <Card className="h-full transition-colors hover:border-primary/40 hover:bg-muted/30">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <Icon className="size-4 text-primary" />
                </div>
                <CardTitle className="text-lg">{t(module.titleKey)}</CardTitle>
                <CardDescription>{t(module.descriptionKey)}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
