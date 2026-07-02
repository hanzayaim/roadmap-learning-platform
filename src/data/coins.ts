import type { CoinPackage } from "@/types/coin";

export const MOCK_COIN_PACKAGES: CoinPackage[] = [
  {
    id: "starter",
    titleKey: "starter",
    coins: 100,
    priceIdr: 25000,
    priceUsd: 2.49,
  },
  {
    id: "popular",
    titleKey: "popular",
    coins: 300,
    priceIdr: 65000,
    priceUsd: 5.99,
    popular: true,
  },
  {
    id: "pro",
    titleKey: "pro",
    coins: 750,
    priceIdr: 149000,
    priceUsd: 12.99,
  },
  {
    id: "ultimate",
    titleKey: "ultimate",
    coins: 1500,
    priceIdr: 279000,
    priceUsd: 22.99,
  },
];
