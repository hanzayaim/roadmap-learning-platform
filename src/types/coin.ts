export interface CoinPackage {
  id: string;
  titleKey: string;
  coins: number;
  priceIdr: number;
  priceUsd: number;
  popular?: boolean;
}

export type LeaderboardPeriod = "weekly" | "monthly" | "yearly";

export interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  avatarInitials: string;
}
