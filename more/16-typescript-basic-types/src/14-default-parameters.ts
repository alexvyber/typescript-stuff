export {}

let productName: (product: string, price?: number) => string

productName = (product = "some", price = 10.99) => {
  return `${product}, ${price}`
}

console.log(productName("TS Bootcamp"))
console.log(productName("TS Bootcamp", 9.99))

productName("123", 123)
