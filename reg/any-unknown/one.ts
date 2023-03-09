const groupBy = (arr: any[], key: any) => {
  const result: any = {}
  arr.forEach(item => {
    // How do we know that item is an object?
    // Or that it has a property the same
    // as the key we pass in?
    const resultKey = item[key]

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

const result = groupBy(array, 1)
// result is any!

result[20].foreach(item => {
  // item is any!
  console.log(item.name, item.age)
})

// --

export {}
