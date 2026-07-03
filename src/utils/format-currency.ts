import type { CoinPackage } from "@/types/coin";

export function formatPackagePrice(coinPackage: CoinPackage) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(coinPackage.priceIdr);
}
