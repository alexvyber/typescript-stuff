export {}

const array = [
  { name: "John", age: 20 },
  { name: "Jane", age: 20 },
  { name: "Jack", age: 30 }
]

const groupBy = <Obj extends Record<string, unknown>, Key extends keyof Obj>(
  arr: Obj[],
  key: Key
) => {
  const result = {} as Record<Obj[Key] & PropertyKey, Obj[]>

  arr.forEach(item => {
    const resultKey = item[key] as Obj[Key] & PropertyKey

    if (result[resultKey]) {
      result[resultKey].push(item)
    } else {
      result[resultKey] = [item]
    }
  })

  return result
}

const result = groupBy(array, "age")

result[20].forEach(item => {
  // No errors, no validation needed!

  console.log("🚀 ~ item.name, item.age:", item.name, item.age)
})
