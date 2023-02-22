export {}

type DigitalProduct = {
  name: string
  price: number
  sales: number
}

type Product = DigitalProduct & {
  availability: string
  category: string
}

type Course = DigitalProduct & {
  released: boolean
  rating: number
}

type OnlineCourse = Product | Course

const course: OnlineCourse = {
  name: "JS",
  price: 10.99,
  sales: 2000,
  released: true,
  rating: 4.6,

  availability: "available",
  category: "Web Dev",
}

console.log(course)
