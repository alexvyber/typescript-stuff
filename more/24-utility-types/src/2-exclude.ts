type MixedType =
  | "Hi"
  | 666
  | ["TS", "JS"]
  | { name: "TS"; price: number }
  | "Hey"
  | { name: "JS"; price: number }
  | 13
  | { name: "Python"; price: 11.99 }
  | [12, 13, 14, 15];

type NotStrings = Exclude<MixedType, string>;
type Notnumbers = Exclude<MixedType, number>;
type NotProduct = Exclude<MixedType, { name: "TS" }>;
type NotProducts = Exclude<MixedType, { price: number }>;
type NotProductsArr1 = Exclude<MixedType, []>;
type NotProductsArr2 = Exclude<MixedType, string[]>;
type NotProductsArr3 = Exclude<MixedType, number[]>;

export type All =
  | NotStrings
  | Notnumbers
  | NotProduct
  | NotProducts
  | NotProductsArr1
  | NotProductsArr2
  | NotProductsArr3;
