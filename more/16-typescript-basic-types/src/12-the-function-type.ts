let productName: Function;

productName = (product: string): string => {
  return product;
};

export let productName1: (arg: string) => string;

productName = <T>(arg: T) => {
  return arg;
};

console.log(productName("TS Bootcamp"));
