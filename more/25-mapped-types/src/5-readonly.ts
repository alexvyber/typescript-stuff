export interface Product {
  name: string;
  price: number;
}

type ReadOnlyTYPE<Type> = {
  readonly [Key in keyof Type]: Type[Key];
};

const product: ReadOnlyTYPE<Product> = {
  name: "TS",
  price: 10.99,
};

const product1: Readonly<Product> = {
  name: "TS",
  price: 10.99,
};

product.name = "JS";
product1.name = "JS";
