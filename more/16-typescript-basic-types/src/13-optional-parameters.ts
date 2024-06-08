let productName: (product: string, price?: number) => string;

productName = (product, price) => {
  return `${product}, ${price}`;
};

productName = (product: string, price: number) => {
  return `${product}, ${price}`;
};

console.log(productName("TS Bootcamp"));
