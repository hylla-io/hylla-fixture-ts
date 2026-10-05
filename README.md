# hylla-fixture-ts

A tiny catalog used as a Hylla ingest fixture. Every file is small and its contents are known
exactly.

## Money

`formatMoney` prints cents as dollars. It lives in [src/money.ts](src/money.ts).

## Tax

`applyTax` in [src/tax.ts](src/tax.ts) adds tax and rounds with `roundHalfUp`, which lives beside
it. Refunds clamp to zero: `applyTax(-1000, 10)` is `0`.

## Totals

`Catalog.total` takes a bulk discount with `applyDiscount` at three or more items, then taxes.
`renderReport` prints a report; rounding is described under [Tax](#tax).
