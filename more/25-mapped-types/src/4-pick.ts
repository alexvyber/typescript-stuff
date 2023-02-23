export interface Product {
  name: string
  price: number
  rating: number
  sales: number
}

type PickType<Type, KeyType extends keyof Type> = {
  [Key in KeyType]: Type[Key]
}

/**
 * From T, pick a set of properties whose keys are in the union K
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
*/

const product: PickType<Product, "name" | "rating"> = {
  name: "TS",
  rating: 4.6,
}

const product1: Pick<Product, "name" | "rating"> = {
  name: "TS",
  rating: 4.6,
}

console.log("🚀 ~ product:", product)
console.log("🚀 ~ product1:", product1)
