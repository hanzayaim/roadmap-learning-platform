import { Briefcase, GraduationCap, School } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function AudienceSelector() {
  const t = useTranslations("audience");

  const options = [
    {
      href: "/sma-smk",
      icon: School,
      titleKey: "smaSmkTitle" as const,
      descriptionKey: "smaSmkDescription" as const,
      focusKey: "smaSmkFocus" as const,
      accent:
        "border-violet-200 hover:border-violet-400 hover:bg-violet-50/80 dark:border-violet-800 dark:hover:border-violet-500 dark:hover:bg-violet-950/40",
      iconClass:
        "bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-300",
      focusClass: "text-violet-700 dark:text-violet-300",
    },
    {
      href: "/college",
      icon: GraduationCap,
      titleKey: "collegeTitle" as const,
      descriptionKey: "collegeDescription" as const,
      focusKey: "collegeFocus" as const,
      accent:
        "border-teal-200 hover:border-teal-400 hover:bg-teal-50/80 dark:border-teal-800 dark:hover:border-teal-500 dark:hover:bg-teal-950/40",
      iconClass:
        "bg-teal-100 text-teal-700 dark:bg-teal-900/60 dark:text-teal-300",
      focusClass: "text-teal-700 dark:text-teal-300",
    },
    {
      href: "/kerja",
      icon: Briefcase,
      titleKey: "workTitle" as const,
      descriptionKey: "workDescription" as const,
      focusKey: "workFocus" as const,
      accent:
        "border-amber-200 hover:border-amber-400 hover:bg-amber-50/80 dark:border-amber-800 dark:hover:border-amber-500 dark:hover:bg-amber-950/40",
      iconClass:
        "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300",
      focusClass: "text-amber-800 dark:text-amber-300",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {options.map((option) => {
        const Icon = option.icon;

        return (
          <Link key={option.href} href={option.href}>
            <Card
              className={cn(
                "h-full border-2 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
                option.accent,
              )}
            >
              <CardHeader>
                <div
                  className={cn(
                    "mb-2 flex size-12 items-center justify-center rounded-xl",
                    option.iconClass,
                  )}
                >
                  <Icon className="size-6" />
                </div>
                <CardTitle className="text-xl font-extrabold">
                  {t(option.titleKey)}
                </CardTitle>
                <CardDescription className="font-medium">
                  {t(option.descriptionKey)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={cn("text-sm font-bold", option.focusClass)}>
                  {t("focusLabel")}: {t(option.focusKey)}
                </p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
