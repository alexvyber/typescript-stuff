export {}

let a = {
  msg: "hello",
  list: [
    "apple",
    "oranage",
    "banana",
    {
      car: {
        city: ["London", "Newcastle"]
      }
    }
  ], // []
  test() {
    console.log("TEST FUNC")
  },
  empty: null
}

function deepCopy(source: { [key: string]: any }) {
  const copy = Array.isArray(source) ? [] : {}

  for (let key in source) {
    if (typeof source[key] == "object" && source[key] != null) {
      // reference type
      // @ts-ignore
      copy[key] = deepCopy(source[key])
    } else {
      // primitive
      // @ts-ignore
      copy[key] = source[key]
    }
  }

  return copy
}
const asdf = deepCopy(["asdf", "asdf", "asdf"])
let b = deepCopy(a) as typeof a

console.log("🚀 ~ a", a)

b.list.push("milk")
b.msg = "hi"
b.test = function SomeNameHERE() {
  console.log("new method")
}

console.log("🚀 ~ a", a)
console.log("🚀 ~ b", b)
