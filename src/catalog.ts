import type { Priced } from "./pricing";
import { applyTax } from "./tax";

export class Catalog {
  private readonly items: Priced[] = [];

  add(item: Priced): void {
    this.items.push(item);
  }

  count(): number {
    return this.items.length;
  }

  subtotal(): number {
    return this.items.reduce((sum, item) => sum + item.priceCents(), 0);
  }

  total(ratePercent: number): number {
    return applyTax(this.subtotal(), ratePercent);
  }
}
