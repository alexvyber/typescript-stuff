export {}

let product = {
  name: "TS",
  price: 10.99,
}

let courseName = product.name
let courseName_ = product["name"]

//
type Product = {
  name: string
  price: number
}

type CourseName = Product["name"]
const courseName__: CourseName = "TS"
console.log(courseName)

//
type Product1 = {
  name: string
  price: number
  moreInfo: {
    released: boolean
    beginnerFriendly: boolean
    level: string
  }
}

function promoteProduct(name: string, price: number, moreInfo: Product1["moreInfo"]): Product1 {
  return {
    name,
    price,
    moreInfo,
  }
}

let courseInfo = promoteProduct("TS", 10.99, {
  released: true,
  beginnerFriendly: true,
  level: "Beginner-Advanced",
})

console.log(courseInfo)

//
interface Product2 {
  name: string
  price: number
  moreInfo: {
    released: boolean
    beginnerFriendly: boolean
    level: string
  }
}

let courseName___: Product2["name"] = "TS"
let coursePrice: Product2["price"] = 10.99
let courseLevel: Product2["moreInfo"]["level"] = "Beginner-Advanced"
let courseInfo_: Product2["name" | "price"] = "TS"
let courseInfo__: Product2["name" | "price"] = 10.99
