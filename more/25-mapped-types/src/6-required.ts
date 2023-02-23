export interface Product {
  name: string
  price?: number
  rating?: number
  sales?: number
}

type RequiredType<Type> = {
  [Key in keyof Type]-?: Type[Key]
}

const onlineCourse: RequiredType<Product> = {
  name: "TS Bootcamp",
  price: 10.99,
  rating: 4.6,
  sales: 1111,
}

const onlineCourse1: Required<Product> = {
  name: "TS Bootcamp",
  price: 10.99,
  rating: 4.6,
  sales: 1111,
}

const inPersonWorkshop: Product = {
  name: "TS Workshop",
}

console.log(onlineCourse)
console.log(inPersonWorkshop)
