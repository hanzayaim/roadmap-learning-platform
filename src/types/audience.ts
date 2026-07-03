export type Audience = "sma-smk" | "college" | "work";

export const AUDIENCES: Audience[] = ["sma-smk", "college", "work"];

export function isAudience(value: string): value is Audience {
  return AUDIENCES.includes(value as Audience);
}
