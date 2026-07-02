import type { CoinPackage } from "@/types/coin";

export function formatPackagePrice(locale: string, coinPackage: CoinPackage) {
  if (locale === "id") {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(coinPackage.priceIdr);
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(coinPackage.priceUsd);
}
