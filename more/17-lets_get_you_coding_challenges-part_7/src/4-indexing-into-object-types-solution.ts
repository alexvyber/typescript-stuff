export {};

// Challenge 1

type Product = {
  name: string;
  prices: Array<number>;
};

type ProductPrices = Product["prices"];

const productPrices: ProductPrices = [10.99, 9.99];
console.log(productPrices);
