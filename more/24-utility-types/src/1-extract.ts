// type MixedTYPES =
//   | "Hi"
//   | 666
//   | ["TS", "JS"]
//   | { name: "TS"; price: number }
//   | "Hey"
//   | { name: "JS"; price: number }
//   | 13
//   | { name: "Python"; price: 11.99 }
//   | [12, 13, 14, 15];

// type Strings = Extract<MixedTYPES, string>;
// type Numbers = Extract<MixedTYPES, number>;
// type Product = Extract<MixedTYPES, { name: "TS" }>;
// type Products = Extract<MixedTYPES, { price: number }>;
// type ProductsArr1 = Extract<MixedTYPES, []>;
// type ProductsArr2 = Extract<MixedTYPES, string[]>;
// type ProductsArr3 = Extract<MixedTYPES, number[]>;
