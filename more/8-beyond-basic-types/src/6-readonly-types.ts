export {}

type ReadOnlyProduct = Readonly<{ name: string; price: number }>

type PartialProduct = Partial<{ name: string; price: number }>

type Product = {
  name: string
  price: number
}

const course: Readonly<Product> = {
  name: "TS",
  price: 10.99,
}

const course_: ReadOnlyProduct = {
  name: "TS",
  price: 10.99,
}

console.log(course)

course.name = "JS"
