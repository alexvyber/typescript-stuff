// class Product {
//   constructor(public name: string, public price: number) {}
// }

class Product<T1, T2> {
  constructor(public name: T1, public price: T2) {}
}

const product1 = new Product<string, number>("TS Bootcamp", 11.99)
const product2 = new Product<string, string>("JS Bootcamp", "$11.99")
const product3 = new Product<string, string>("Tailwind Bootcamp", "Not Available")

console.log(product1)
console.log(product2)
console.log(product3)
