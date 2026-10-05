import { roundHalfUp } from "./money";

/** Takes `percent` off an amount in cents, rounding the discount half up. */
export function applyDiscount(cents: number, percent: number): number {
  return cents - roundHalfUp((cents * percent) / 100);
}
