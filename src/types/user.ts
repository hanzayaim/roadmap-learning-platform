export type CoinTransactionType = "topup" | "spend";

export interface CoinTransaction {
  id: string;
  type: CoinTransactionType;
  amount: number;
  descriptionKey: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  coins: number;
}
