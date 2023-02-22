// Challenge 2
function returnLength<T>(elements: T[]): number {
  return elements.length
}

console.log(returnLength(["HTML", "CSS"]))
console.log(returnLength([1, 2, 3, 4]))
console.log(returnLength([true, false, 1, 10, "a"]))
