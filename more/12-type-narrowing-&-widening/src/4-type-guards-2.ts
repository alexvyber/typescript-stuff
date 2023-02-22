export {}

//  2- instanceof
let newDate = new Date()

if (newDate instanceof Date) {
  console.log("Success", newDate)
} else {
  console.log("Failure", newDate) // never
}

//  3 Specific Value Check
let someValue = null

if (someValue === null) {
  console.log("Success", someValue)
} else {
  console.log("Failure", someValue)
}

//  4 Truthy/Falsy Check
let someValue_ = true

if (!someValue) {
  console.log("Success", someValue_)
} else {
  console.log("Failure", someValue_)
}

//  5- Built-in Method
let someArr = Math.random() > 0.5 ? [1, 2, 3] : 123

if (Array.isArray(someArr)) {
  console.log("Success", someArr)
} else {
  console.log("Failure", someArr)
}

//  6- Property Presence Check
let someObject = { name: "TS" }

if ("price" in someObject) {
  console.log("Success", someObject)
} else {
  console.log("Failure", someObject)
}
