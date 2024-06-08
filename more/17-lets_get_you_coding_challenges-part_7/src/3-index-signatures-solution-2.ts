// Challenge 2

type Product = {
  [name: string]: number | undefined;
};

const price: Product = {
  TS: 10.99,
  JS: 9.99,
  Remix: undefined,
};

console.log(price);
