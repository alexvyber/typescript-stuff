function getProductName({ productName }: { productName: string }): string {
  return productName
}

const course = {
  name: "TS",
  price: 10.99,
}

export { getProductName }
export { getProductName as ProductName, course }

export const released = false
export const courseName = "TS Bootcamp"

export default course
