import type { CoinTransaction, User } from "@/types/user";

export const MOCK_USER: User = {
  id: "user-1",
  name: "Alex Learner",
  email: "alex@example.com",
  coins: 250,
};

export const MOCK_COIN_HISTORY: CoinTransaction[] = [
  {
    id: "tx-1",
    type: "topup",
    amount: 100,
    descriptionKey: "welcomeBonus",
    date: "2026-06-01",
  },
  {
    id: "tx-2",
    type: "spend",
    amount: -50,
    descriptionKey: "roadmapUnlock",
    date: "2026-06-10",
  },
  {
    id: "tx-3",
    type: "topup",
    amount: 200,
    descriptionKey: "coinPackage",
    date: "2026-06-18",
  },
];
