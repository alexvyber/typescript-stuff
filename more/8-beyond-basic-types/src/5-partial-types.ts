export {};

type Product = {
  name?: string;
  price?: number;
};

let course: Product = { name: "TS" };

//
// Mapped Types

type Product1 = {
  name: string;
  price: number;
};

let course_: Partial<Product> = { name: "TS" };
// course.name = "JS";

let courseName_: string = course.name;
