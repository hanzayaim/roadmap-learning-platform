import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { categoryIconMap } from "@/lib/category-icons";
import type { CareerAspiration } from "@/data/journey";
import { getTranslations } from "next-intl/server";

interface CareerAspirationGridProps {
  careers: CareerAspiration[];
}

export async function CareerAspirationGrid({
  careers,
}: CareerAspirationGridProps) {
  const t = await getTranslations("journey");

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {careers.map((career) => {
        const iconKey = career.categorySlug as keyof typeof categoryIconMap;
        const Icon = categoryIconMap[iconKey];

        return (
          <Link key={career.slug} href={`/sma-smk/careers/${career.slug}`}>
            <Card className="h-full transition-colors hover:border-primary/40 hover:bg-muted/30">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-xl">{t(career.titleKey)}</CardTitle>
                <CardDescription>{t(career.descriptionKey)}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
