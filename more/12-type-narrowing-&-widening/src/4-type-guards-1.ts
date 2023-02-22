// 1 typeof
function getProductPrice(product: string | number): number {
  if (typeof product === "string") {
    return parseInt(product)
  }
  return product
}

const coursePrice = getProductPrice("10")
const coursePrice_ = getProductPrice(9.99)

console.log("🚀 ~ coursePrice:", coursePrice)
console.log("🚀 ~ coursePrice_:", coursePrice_)

// 1.1 typeof infered

function getProductPriceInfered(product: string | number) {
  if (typeof product === "string") {
    return parseInt(product)
  }
  return product
}

const coursePriceInfered = getProductPriceInfered("10")
const coursePriceInfered_ = getProductPriceInfered(9.99)

console.log("🚀 ~ coursePriceInfered:", coursePriceInfered)
console.log("🚀 ~ coursePriceInfered_:", coursePriceInfered_)
