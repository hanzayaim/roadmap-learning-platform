"use client";

import { LogIn, LogOut } from "lucide-react";
import { useTranslations } from "next-intl";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "@/i18n/navigation";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function NavbarAuth() {
  const t = useTranslations("layout.nav");
  const { isAuthenticated, user, logout } = useAuth();

  if (!isAuthenticated || !user) {
    return (
      <div className="flex items-center gap-1 sm:gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="hidden sm:inline-flex"
          render={<Link href="/login" />}
        >
          <LogIn className="size-4" />
          {t("login")}
        </Button>
        <Button size="sm" render={<Link href="/register" />}>
          {t("register")}
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <Button variant="ghost" size="sm" render={<Link href="/profile" />}>
        <Avatar className="size-7">
          <AvatarFallback className="text-xs">
            {getInitials(user.name)}
          </AvatarFallback>
        </Avatar>
        <span className="hidden max-w-24 truncate sm:inline">{user.name}</span>
      </Button>
      <Button variant="outline" size="sm" onClick={logout}>
        <LogOut className="size-4" />
        <span className="hidden sm:inline">{t("logout")}</span>
      </Button>
    </div>
  );
}
