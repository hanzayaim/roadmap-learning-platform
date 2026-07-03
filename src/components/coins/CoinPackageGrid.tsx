"use client";

import { Coins, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { CoinPackage } from "@/types/coin";
import { formatPackagePrice } from "@/utils/format-currency";

interface CoinPackageGridProps {
  packages: CoinPackage[];
}

export function CoinPackageGrid({ packages }: CoinPackageGridProps) {
  const t = useTranslations("topUpPage");
  const [selectedPackage, setSelectedPackage] = useState<CoinPackage | null>(
    null,
  );
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const openCheckout = (coinPackage: CoinPackage) => {
    setSelectedPackage(coinPackage);
    setCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setCheckoutOpen(false);
    setSelectedPackage(null);
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((coinPackage) => (
          <Card
            key={coinPackage.id}
            className={
              coinPackage.popular
                ? "border-primary shadow-sm ring-1 ring-primary/20"
                : undefined
            }
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-lg">
                  {t(`packages.${coinPackage.titleKey}.title`)}
                </CardTitle>
                {coinPackage.popular ? (
                  <Badge className="gap-1">
                    <Sparkles className="size-3" />
                    {t("popularBadge")}
                  </Badge>
                ) : null}
              </div>
              <CardDescription>
                {t(`packages.${coinPackage.titleKey}.description`)}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="flex items-center gap-2 text-2xl font-bold">
                <Coins className="size-5 text-primary" />
                {t("coinsAmount", { count: coinPackage.coins })}
              </p>
              <p className="text-lg font-semibold">
                {formatPackagePrice(coinPackage)}
              </p>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={coinPackage.popular ? "default" : "outline"}
                onClick={() => openCheckout(coinPackage)}
              >
                {t("buyButton")}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog
        open={checkoutOpen}
        onOpenChange={(open) => {
          if (!open) closeCheckout();
        }}
      >
        <DialogContent>
          {selectedPackage ? (
            <>
              <DialogHeader>
                <DialogTitle>{t("checkout.title")}</DialogTitle>
                <DialogDescription>{t("checkout.description")}</DialogDescription>
              </DialogHeader>
              <div className="space-y-3 rounded-lg border p-4 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted-foreground">
                    {t("checkout.packageLabel")}
                  </span>
                  <span className="font-medium">
                    {t(`packages.${selectedPackage.titleKey}.title`)}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted-foreground">
                    {t("checkout.coinsLabel")}
                  </span>
                  <span className="font-medium">
                    {t("coinsAmount", { count: selectedPackage.coins })}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted-foreground">
                    {t("checkout.totalLabel")}
                  </span>
                  <span className="text-base font-semibold">
                    {formatPackagePrice(selectedPackage)}
                  </span>
                </div>
              </div>
              <DialogFooter className="gap-2 sm:justify-end">
                <Button variant="outline" onClick={closeCheckout}>
                  {t("checkout.cancel")}
                </Button>
                <Button onClick={closeCheckout}>{t("checkout.confirm")}</Button>
              </DialogFooter>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
