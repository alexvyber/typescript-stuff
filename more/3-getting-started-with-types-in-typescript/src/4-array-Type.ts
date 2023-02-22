// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5]
// console.log(numbers);

// Array of strings
let products: string[] = ["Hats", "Shirts", "Jeans"]
// console.log(products);

// Array of strings and numbers
let mixData1: (string | number)[] = ["hi", 25, "hello"]
// console.log(mixData1);

// Array of strings, numbers and booleans
let mixData2: (string | number | boolean)[] = ["hi", 25, "hello", true]
// console.log(mixData2);

// nested number type array
let myNums: number[][] = [
  [1, 2],
  [2, 3],
]

// nested string type array
let myStrings: string[][] = [["hi"], ["hello", "there"]]

// Nested string and number type array
let mixDataNested: (string | number)[][] = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ["hi"],
  ["hello", "there"],
  [123, "123"],
]

let mixDataNestedMore: (string[] | number[])[] = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ["hi"],
  ["hello", "there"],
  [123, "123"], // error
]
