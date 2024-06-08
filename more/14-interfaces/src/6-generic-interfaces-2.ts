export {};

interface Product<T> {
  price: T;
}

const product1: Product<string> = {
  price: "$10.99",
};

const product2: Product<number> = {
  price: 10.99,
};
