import { getTranslations } from "next-intl/server";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { NavbarAuth } from "@/components/layout/NavbarAuth";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export async function Navbar() {
  const t = await getTranslations("layout");

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight sm:text-base">
          {t("brandName")}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Button variant="ghost" size="sm" render={<Link href="/" />}>
            {t("nav.home")}
          </Button>
          <Button variant="ghost" size="sm" render={<Link href="/#explore" />}>
            {t("nav.explore")}
          </Button>
          <Button variant="ghost" size="sm" render={<Link href="/leaderboard" />}>
            {t("nav.leaderboard")}
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <NavbarAuth />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
