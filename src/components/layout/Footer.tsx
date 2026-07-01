import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("layout");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-center sm:px-6 sm:text-left">
        <p className="text-sm font-medium">{t("footer.tagline")}</p>
        <p className="text-xs text-muted-foreground">
          {t("footer.copyright", { year })}
        </p>
      </div>
    </footer>
  );
}
