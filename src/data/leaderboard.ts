import type { LeaderboardEntry, LeaderboardPeriod } from "@/types/coin";

export const MOCK_LEADERBOARD: Record<LeaderboardPeriod, LeaderboardEntry[]> = {
  weekly: [
    { rank: 1, name: "Sari Dev", points: 1240, avatarInitials: "SD" },
    { rank: 2, name: "Alex Learner", points: 1180, avatarInitials: "AL" },
    { rank: 3, name: "Mika Chen", points: 1095, avatarInitials: "MC" },
    { rank: 4, name: "Rafi Pratama", points: 980, avatarInitials: "RP" },
    { rank: 5, name: "Nina Ortiz", points: 910, avatarInitials: "NO" },
  ],
  monthly: [
    { rank: 1, name: "Mika Chen", points: 4820, avatarInitials: "MC" },
    { rank: 2, name: "Sari Dev", points: 4610, avatarInitials: "SD" },
    { rank: 3, name: "Alex Learner", points: 4390, avatarInitials: "AL" },
    { rank: 4, name: "Jonas Klein", points: 4015, avatarInitials: "JK" },
    { rank: 5, name: "Rafi Pratama", points: 3880, avatarInitials: "RP" },
  ],
  yearly: [
    { rank: 1, name: "Alex Learner", points: 28450, avatarInitials: "AL" },
    { rank: 2, name: "Sari Dev", points: 27120, avatarInitials: "SD" },
    { rank: 3, name: "Jonas Klein", points: 25980, avatarInitials: "JK" },
    { rank: 4, name: "Mika Chen", points: 24760, avatarInitials: "MC" },
    { rank: 5, name: "Nina Ortiz", points: 23110, avatarInitials: "NO" },
  ],
};

export function getLeaderboardByPeriod(period: LeaderboardPeriod) {
  return MOCK_LEADERBOARD[period];
}
