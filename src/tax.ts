import { roundHalfUp } from "./money";

/**
 * Adds tax at `ratePercent` to an amount in cents, rounding half up.
 * A negative amount (a refund) stays negative.
 */
export function applyTax(cents: number, ratePercent: number): number {
  return roundHalfUp((cents * (100 + ratePercent)) / 100);
}
