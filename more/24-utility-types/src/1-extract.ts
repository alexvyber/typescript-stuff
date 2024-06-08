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

type Strings = Extract<MixedType, string>;
type Numbers = Extract<MixedType, number>;
type Product = Extract<MixedType, { name: "TS" }>;
type Products = Extract<MixedType, { price: number }>;
type ProductsArr1 = Extract<MixedType, []>;
type ProductsArr2 = Extract<MixedType, string[]>;
type ProductsArr3 = Extract<MixedType, number[]>;
