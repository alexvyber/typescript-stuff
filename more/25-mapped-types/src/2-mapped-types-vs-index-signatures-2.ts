export {}

type Course = {
  name: string
  price: number
}

// mapped type
type Product = { [course in "TS" | "JS"]: Course }

// index signature
// type Product = { [course: "TS" | "JS"]: Course };

function getCoursesInfo(course: Product) {
  return course
}

let courses = getCoursesInfo({
  TS: { name: "TS", price: 10.99 },
  JS: { name: "JS", price: 9.99 },
})

console.log(courses)

// type Product<T> = { [k: string]: T };
type ProductClone = { [course in string]: Course }
