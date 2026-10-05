/** Anything with a price in whole cents. */
export interface Priced {
  priceCents(): number;
}

export class Book implements Priced {
  readonly title: string;
  readonly unitCents: number;
  readonly quantity: number;

  constructor(title: string, unitCents: number, quantity: number) {
    this.title = title;
    this.unitCents = unitCents;
    this.quantity = quantity;
  }

  priceCents(): number {
    return this.unitCents * this.quantity;
  }
}
