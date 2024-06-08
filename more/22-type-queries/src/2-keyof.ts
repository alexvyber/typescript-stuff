export {};

const course = {
  name: "TS",
  price: 10.99,
};

type Product = typeof course;
type ProductKeys = keyof Product;
type ProductKeyTypes = Product[ProductKeys];

const product: Product = {
  name: "JS",
  price: 9.99,
};

function getCourseInfo<T, K extends keyof T>(course: T, info: K) {
  return course[info];
}

const courseName = getCourseInfo(course, "name");
const coursePrice = getCourseInfo(course, "price");

console.log(courseName, coursePrice);
