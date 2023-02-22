// type Course = {
//   name: string;
//   price: number;
// };

// type Product<T> = { [k: string]: T };

// function getCoursesInfo<T>(course: Product<T>) {
//   return course;
// }

// let courses = getCoursesInfo<Course>({
//   course_1: { name: "TS", price: 10.99 },
//   course_2: { name: "JS", price: 9.99 },
//   course_3: { name: "Python", price: 11.99 },
// });

// console.log(courses);

//  mapped type
// type Course = {
//   name: string;
//   price: number;
// };

// mapped type
// type Product = { [course in "TS" | "JS"]: Course };

// index signature
// type Product = { [course: "TS" | "JS"]: Course };

// function getCoursesInfo(course: Product) {
//   return course;
// }

// let courses = getCoursesInfo({
//   TS: { name: "TS", price: 10.99 },
//   JS: { name: "JS", price: 9.99 },
// });

// console.log(courses);

--
// type Product<T> = { [k: string]: T };
// type ProductClone = {[course in string]: Course}
