import { formatMoney } from "./money";
import { applyTax } from "./tax";

// Best practice: one interface declaration; a second `interface Badge` merges into the first without a word.
export interface Badge {
  kind: string;
}

export interface Badge {
  cents: number;
}

export function makeBadge(cents: number): Badge {
  return { kind: "badge", cents };
}

// Best practice: a named export; a default export takes whatever name each importer gives it.
export default function renderBadge(cents: number, ratePercent: number): string {
  const badge = makeBadge(cents);
  return `${badge.kind}: ${formatMoney(applyTax(badge.cents, ratePercent))}`;
}
