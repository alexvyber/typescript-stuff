let courseDiscounts = 25;
courseDiscounts = 5;

type CourseDiscounts = number;

let courseDiscounts_: CourseDiscounts = 25;
courseDiscounts = 5;

type CourseDiscounts_ = 25 | 35 | 45 | 75;
let courseDiscounts__: CourseDiscounts = 35;

type TSCourse = "TS";
let courseName: TSCourse = "TS";

//

type MyCourses = {
  name: string;
  price: number;
};

const tsCourse: MyCourses = {
  name: "TS Bootcamp",
  price: 10.99,
};

const jsCourse: MyCourses = {
  name: "JS Bootcamp",
  price: 9.99,
};
