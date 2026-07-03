import { getTranslations } from "next-intl/server";

import { NavbarAuth } from "@/components/layout/NavbarAuth";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export async function Navbar() {
  const t = await getTranslations("layout");

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="bg-gradient-to-r from-violet-600 to-teal-500 bg-clip-text text-base font-extrabold tracking-tight text-transparent sm:text-lg"
        >
          {t("brandName")}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Button
            variant="ghost"
            size="sm"
            className="font-bold"
            render={<Link href="/" />}
          >
            {t("nav.home")}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="font-bold"
            render={<Link href="/sma-smk" />}
          >
            {t("nav.smaSmk")}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="font-bold"
            render={<Link href="/college" />}
          >
            {t("nav.college")}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="font-bold"
            render={<Link href="/kerja" />}
          >
            {t("nav.work")}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="font-bold"
            render={<Link href="/leaderboard" />}
          >
            {t("nav.leaderboard")}
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <NavbarAuth />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
