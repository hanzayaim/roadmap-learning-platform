import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("layout");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-primary/10 bg-gradient-to-r from-violet-50/80 via-background to-teal-50/80 dark:from-violet-950/30 dark:via-background dark:to-teal-950/20">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-center sm:px-6 sm:text-left">
        <p className="text-sm font-bold text-primary">{t("footer.tagline")}</p>
        <p className="text-xs font-semibold text-muted-foreground">
          {t("footer.copyright", { year })}
        </p>
      </div>
    </footer>
  );
}
