type Product1 = {
  name: string
}

let course1: Product1 = {
  name: "TS Bootcamp",
  price: 10.99,
}

//

type Product2 = {
  // [k: string]: string;
  [courseNames: string]: string
}

let course2: Product2 = {
  TS: "TS Bootcamp",
  JS: "JS Bootcamp",
  Python: "Python Bootcamp",
}

//

type Product3 = {
  [isPriced: string]: boolean
  released: boolean
}

let course3: Product3 = {
  TS: true,
  JS: true,
  released: false,
}

//

type Product4 = {
  [price: string]: number
  released: boolean
}

let course4: Product4 = {
  TS: true,
  JS: true,
  released: false,
}

//

type Product5 = {
  [k: string]: {
    name: string
    price: number
  }
}

let course5: Product5 = {
  TS: { name: "TS Bootcamp", price: 10.99 },
  JS: { name: "JS Bootcamp", price: 9.99 },
  Python: { name: "Python Bootcamp", price: 11.99 },
}
