// Best practice: re-export named items; `export { default as ... }` renames a default at every hop.
export { default as renderBadge, makeBadge, type Badge } from "./badge";
export { Catalog } from "./catalog";
export { applyDiscount } from "./discount";
// Best practice: name the re-exported items; an `export *` barrel hides where each name comes from.
export * from "./even";
export { formatMoney } from "./money";
export { Book, type Priced } from "./pricing";
export { renderReport } from "./report";
export { applyTax } from "./tax";
// Best practice: re-export the names you need; `export * as` hides the list behind one namespace.
export * as tax from "./tax";
