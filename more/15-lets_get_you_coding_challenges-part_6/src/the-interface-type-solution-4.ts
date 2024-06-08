// Challenge 4

export {};

type ProductName = {
  name: string;
};

interface ProductPrice extends ProductName {
  price: number;
}

const product: ProductPrice = { name: " TS Bootcamp", price: 10.99 };
