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

let b = { name: "obj. B" }

type SomeObj = { [key: string]: any }

function deepAssign(target: SomeObj, source: SomeObj) {
  // JS checks
  // if (target == null || typeof target != "object")
  //   throw "illegal 1st arg. value"
  // if (source == null || typeof source != "object")
  //   throw "illegal 2nd arg. value"

  for (const key in source) {
    if (!(source[key] != null && typeof source[key] === "object")) {
      target[key] = source[key]
    }

    if (Array.isArray(source[key])) {
      target[key] = []
    } else {
      target[key] = {}
    }

    deepAssign(target[key], source[key])
  }

  return target
}

deepAssign({}, {})

deepAssign(b, a)

console.log("🚀 ~ a", a)
console.log("🚀 ~ b", b)
