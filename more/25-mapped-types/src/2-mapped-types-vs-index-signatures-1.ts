export {};

type Course = {
  name: string;
  price: number;
};

type Product<T> = { [k: string]: T };
type Mapped<T> = { [k in "one" | "two"]: T };

function getCoursesInfo<T>(course: Product<T>) {
  return course;
}

let courses = getCoursesInfo<Course>({
  course_1: { name: "TS", price: 10.99 },
  course_2: { name: "JS", price: 9.99 },
  course_3: { name: "Python", price: 11.99 },
});

console.log(courses);
