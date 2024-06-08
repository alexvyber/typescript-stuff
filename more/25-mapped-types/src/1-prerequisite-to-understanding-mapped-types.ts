export {};

//  1- map()

const arr = [1, 2, 3, 4, 5].map((item) => item.toString());
console.log("🚀 ~ arr:", arr);

//  2- Indexed Access Type
type Product = {
  name: string;
  price: number;
};

type CourseName = Product["name"];

//  3- Index Signatures
type Product1 = {
  [k: string]: string;
};

const prodcut: Product1 = {
  TS: "TS Bootcamp",
  JS: "JS Bootcamp",
  SomeRandomShit: "asdfasdfasdfasdfasdfasdf",
};
