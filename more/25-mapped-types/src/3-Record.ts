type Course = {
  name: string
  price: number
}

// Original Mapped Types
// type Product = { [course in "TS" | "JS"]: Course };

// First Iteration
// type RecordTYPE<KeyType, ValueType> = { [key in KeyType]: ValueType };

// Second Iteration
type RecordTYPE<KeyType extends string, ValueType> = {
  [key in KeyType]: ValueType
}

/*
type Record<K extends keyof any, T> = {
  [P in K]: T
}

let recordKeyType: keyof any
*/

// function getCoursesInfo(course: Product) {
//   return course;
// }

function getCoursesInfo<U extends string, T>(course: RecordTYPE<U, T>) {
  return course
}

let courses = getCoursesInfo({
  TS: { name: "TS", price: 10.99 },
  JS: { name: "JS", price: 9.99 },
  Python: { name: "Python", price: 11.99 },
})

console.log(courses)
