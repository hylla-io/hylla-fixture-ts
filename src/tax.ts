export function roundHalfUp(x: number): number {
  return Math.max(0, Math.floor(x + 0.5));
}

/**
 * Adds tax at `ratePercent` to an amount in cents, rounding half up.
 * A negative amount (a refund) becomes zero.
 */
export function applyTax(cents: number, ratePercent: number): number {
  return roundHalfUp((cents * (100 + ratePercent)) / 100);
}
