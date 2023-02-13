export {}

class MyArray<T extends string> extends Array {
  constructor(...args: T[]) {
    // @ts-ignore
    super(...args) // FIXME: how to fix that ???
  }

  popUp(): T {
    return this.pop().toUpperCase()
  }
}

const arr = new MyArray("asdf", "asdfa", "asdfasdf")

console.log("🚀 ~ arr[0]", arr[0])
console.log("🚀 ~ arr", arr.popUp())
console.log("🚀 ~ arr", arr.popUp())
console.log("🚀 ~ arr", arr.popUp())
