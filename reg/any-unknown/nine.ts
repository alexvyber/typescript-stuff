export {}

const groupBy = (arr: Record<string, unknown>[], key: string) => {
  const result: Record<string, unknown[]> = {}

  arr.forEach(item => {
    const resultKey = item[key] as string

    if (result[resultKey]) {
      result[resultKey].push(item)
    } else {
      result[resultKey] = [item]
    }
  })

  return result
}

const array = [
  { name: "John", age: 20 },
  { name: "Jane", age: 20 },
  { name: "Jack", age: 30 }
]

// result is Record<string, unknown[]>
const result = groupBy(array, "age")

// Property 'foreach' does not exist on type
// 'unknown[]'. Did you mean 'forEach'?
result[20].foreach(item => {})

result[20].forEach(item => {
  if (
    typeof item === "object" &&
    item &&
    "age" in item &&
    "name" in item &&
    typeof item.age === "number" &&
    typeof item.name === "string"
  ) {
    // Hooray, it's a string!
    item.name

    // Hooray, it's a number!
    item.age
  }
})
