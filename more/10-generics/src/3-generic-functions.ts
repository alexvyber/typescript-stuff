function getArrayItem<T>(item: Array<T>): T {
  return item[2]
}

const arr = [
  { new: 1, some: "asdfasdf" },
  { new: 2, some: "asdf asdf asdfasdf" },
]

const number = getArrayItem<number>([1, 2, 3, 4, 5])
const someStr = getArrayItem<string>(["Hi", "Hey", "Hello", "There"])
const obj = getArrayItem<(typeof arr)[0]>(arr)

const numberTwo = getArrayItem([1, 2, 3, 4, 5])
const someStrTwo = getArrayItem(["Hi", "Hey", "Hello", "There"])

console.log(someStr)
