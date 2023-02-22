function holidaySales(product: string, sales: number, tax: number, discount: number): number {
  let price: number = 0

  if (product === "sunglasses") price = 29
  if (product === "hats") price = 19
  if (product === "shoes") price = 59

  let totalSalesforIndividualProduct: number = price * sales

  return (
    totalSalesforIndividualProduct -
    tax * totalSalesforIndividualProduct -
    discount * totalSalesforIndividualProduct
  )
}

const sunglasses: number = holidaySales("sunglasses", 20, 0.15, 0.25)
const hats: number = holidaySales("hats", 15, 0.12, 0.15)
const shoes: number = holidaySales("shoes", 50, 0.08, 0.45)

console.log(`The total profit from the sales of sunglasses is $${sunglasses}`)
console.log(`The total profit from the sales of hats is $${hats}`)
console.log(`The total profit from the sales of shoes is $${shoes}`)
