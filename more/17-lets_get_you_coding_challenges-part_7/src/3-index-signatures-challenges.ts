export {};

/*  Challenge 1 
What will the object Product log?
*/

type Products = {
  [price: string]: number;
  name: string;
};

const products: Products = {
  name: "TS Bootcamp",
  price: 10.99,
};

/*  Challenge 2 
Create an index signature that map a product’s name (a string) to a price (a number or undefined). Finally create an object from the type
*/

/*  Challenge 3 
What will the Product Object log?
*/

type Product = {
  [price: string]: number;
  noOfStudents: number;
};

const product: Product = {
  FlexBox: 10.99,
  noOfStudents: 4200,
};

console.log(product);
