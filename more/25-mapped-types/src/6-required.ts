// interface Product {
//   name: string;
//   price?: number;
//   rating?: number;
//   sales?: number;
// }

// type RequiredTYPE<Type> = {
//   [Key in keyof Type]-?: Type[Key];
// };

// const onlineCourse: RequiredTYPE<Product> = {
//   name: "TS Bootcamp",
//   price: 10.99,
//   rating: 4.6,
//   sales: 1111,
// };

// // const onlineCourse: Required<Product> = {
// //   name: "TS Bootcamp",
// //   price: 10.99,
// //   rating: 4.6,
// //   sales: 1111,
// // };

// const inPersonWorkshop: Product = {
//   name: "TS Workshop",
// };

// console.log(onlineCourse);
// console.log(inPersonWorkshop);
