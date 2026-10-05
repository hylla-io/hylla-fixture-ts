import type { Priced } from "./pricing";

/** The pre-catalog total: sums prices with no tax. Kept for old callers. */
export function legacyTotal(items: Priced[]): number {
  let sum = 0;
  for (const item of items) {
    sum += item.priceCents();
  }
  return sum;
}
