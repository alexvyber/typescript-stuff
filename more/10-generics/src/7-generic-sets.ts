export {}

const mySet = new Set([1, 2, 3])

mySet.add(4)
console.log(mySet.has(5))
console.log(mySet)

const mixedData: Set<string | number> = new Set(["Hi", 1])
const myArr_: (string | number)[] = mixedData
const mySet2_: Set<number> = [1, 2, 3]

console.log(mixedData.size)
