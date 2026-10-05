import type { Catalog } from "./catalog";
import { isEven } from "./even";
import { formatMoney } from "./money";

export function renderReport(catalog: Catalog, ratePercent: number): string {
  const parity = isEven(catalog.count()) ? "even" : "odd";
  return [
    `items: ${catalog.count()} (${parity})`,
    `subtotal: ${formatMoney(catalog.subtotal())}`,
    `total: ${formatMoney(catalog.total(ratePercent))}`,
  ].join("\n");
}
