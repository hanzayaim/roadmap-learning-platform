"use client";

import { Coins, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MOCK_COIN_HISTORY } from "@/data/user";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "@/i18n/navigation";

export function ProfileContent() {
  const t = useTranslations("profilePage");
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-10 sm:px-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t("title")}
        </h1>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserRound className="size-5" />
            {t("accountSection")}
          </CardTitle>
          <CardDescription>{t("accountDescription")}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">{t("nameLabel")}</p>
            <p className="font-medium">{user.name}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{t("emailLabel")}</p>
            <p className="font-medium">{user.email}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-sm text-muted-foreground">{t("coinsLabel")}</p>
            <p className="flex items-center gap-2 text-lg font-semibold">
              <Coins className="size-5" />
              {t("coinsValue", { count: user.coins })}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("historySection")}</CardTitle>
          <CardDescription>{t("historyDescription")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {MOCK_COIN_HISTORY.map((transaction) => (
            <div
              key={transaction.id}
              className="flex flex-col gap-2 rounded-lg border p-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium">
                  {t(`transactions.${transaction.descriptionKey}`)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {transaction.date}
                </p>
              </div>
              <Badge
                variant={transaction.type === "topup" ? "default" : "secondary"}
              >
                {transaction.amount > 0
                  ? t("amountPositive", { count: transaction.amount })
                  : t("amountNegative", { count: Math.abs(transaction.amount) })}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
