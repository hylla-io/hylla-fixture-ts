import { isEven, renderBadge, tax } from "./index";

export function receipt(cents: number): string {
  const parity = isEven(cents) ? "even" : "odd";
  return `${renderBadge(cents, 10)} / net ${tax.applyTax(cents, 0)} (${parity})`;
}
