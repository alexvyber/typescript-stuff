export {}

const obj = {
  name: "Alice"
}

const proxy = new Proxy(obj, {})

proxy.name = "Maria"

console.log(obj)

const proxy2 = new Proxy(
  {},
  {
    get(target, p, receiver) {
      console.log("get some stuff")
    }
  }
)

proxy2.constructor
