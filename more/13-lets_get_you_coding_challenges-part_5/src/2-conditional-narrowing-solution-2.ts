// Challenge 2
function arrayOrItem<T>(elements: Array<T> | T): T {
  if (Array.isArray(elements)) {
    return elements[0]
  } else {
    return elements
  }
}

// let result1 = arrayOrItem<number>([5, 2, 3])
// let result2 = arrayOrItem<boolean>([false, true])
// let result3 = arrayOrItem<string>(["Hi"])
// let result4 = arrayOrItem<number>(10)
// let result5 = arrayOrItem<boolean>(true)
// let result6 = arrayOrItem<string>("ten")

let result1 = arrayOrItem([5, 2, 3])
let result2 = arrayOrItem([false, true])
let result3 = arrayOrItem(["Hi"])
let result4 = arrayOrItem(10)
let result5 = arrayOrItem(true)
let result6 = arrayOrItem("ten")

console.log("🚀 ~ result1:", result1)
console.log("🚀 ~ result2:", result2)
console.log("🚀 ~ result3:", result3)
console.log("🚀 ~ result4:", result4)
console.log("🚀 ~ result5:", result5)
console.log("🚀 ~ result6:", result6)
