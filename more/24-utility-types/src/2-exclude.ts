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

// type NotStrings = Exclude<MixedTYPES, string>;
// type Notnumbers = Exclude<MixedTYPES, number>;
// type NotProduct = Exclude<MixedTYPES, { name: "TS" }>;
// type NotProducts = Exclude<MixedTYPES, { price: number }>;
// type NotProductsArr1 = Exclude<MixedTYPES, []>;
// type NotProductsArr2 = Exclude<MixedTYPES, string[]>;
// type NotProductsArr3 = Exclude<MixedTYPES, number[]>;
