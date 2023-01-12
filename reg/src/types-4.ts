// types-4.ts

type Some = {
  one: string
  two: number
}

type More = {
  one: string
  two: number
}

//👇 default export

// ⛔️ Error:
// A module cannot have multiple default exports.ts(2528)
export default Some
export default More
