let product = "TS";
product = "JS";

let price = 10.99;
price = 9.99;

type Product = {
  name: "TS";
  price: number;
};

type Course = {
  name?: string;
  readonly price: number;
};

function courseName(course: Product) {
  return course.name;
}

function courseNameTwo(course: Course) {
  return course.price;
}

const course = {
  name: "TS" as const,
  price: 10.99,
};

const courseTwo: Course = {
  name: "JS",
  price: 22.22,
};

console.log("🚀 ~ courseNameTwo(courseTwo):", courseNameTwo(courseTwo));
console.log("🚀 ~ courseName(course):", courseName(course));
