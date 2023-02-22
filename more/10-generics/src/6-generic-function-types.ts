export {}

type FuncType<T> = (elements: T[]) => number
type FuncTypeTwo<T> = (elements: Array<T>) => number

let getArrayLength: FuncType<number> = elements => {
  return elements.length
}

let getArrayLengthTwo: FuncTypeTwo<string> = elements => {
  return elements.length
}

let arrLength = getArrayLength([1, 2, 3])
console.log("🚀 ~ arrLength:", arrLength)

let arrLength_ = getArrayLengthTwo(["Hi"])
console.log("🚀 ~ arrLength_:", arrLength_)
