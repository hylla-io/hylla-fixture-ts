import type { Catalog } from "./catalog";
import { isEven } from "./even";
import { formatCents } from "./money";

export function renderReport(catalog: Catalog, ratePercent: number): string {
  const parity = isEven(catalog.count()) ? "even" : "odd";
  return [
    `items: ${catalog.count()} (${parity})`,
    `subtotal: ${formatCents(catalog.subtotal())}`,
    `total: ${formatCents(catalog.total(ratePercent))}`,
  ].join("\n");
}
