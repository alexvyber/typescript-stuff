export {}

type FunctionType = {
  (...args: any[]): any
}

type SomePrototye = {
  numberOfCats: number
}

type SomeObject = {
  prop: string
  method: (...args: any[]) => void
}

type SomeConstructor = {
  new (prop: string, method: (...args: any[]) => void): SomeObject &
    SomePrototye
}

function isFunction(func: unknown): func is FunctionType {
  return typeof func === "function"
}

function assertConstructor(func: any): asserts func is SomeConstructor {
  if (isFunction(func))
    try {
      Reflect.construct(String, [], func)
    } catch (e) {
      throw new Error("not a constructor")
    }

  throw new Error("not a function")
}

// assertConstructor(SomeFunc)

function Some(this: SomeObject, prop: string, method: (...args: any[]) => any) {
  this.prop = prop
  this.method = method
  return this
}

const some = new (Some as unknown as SomeConstructor)("asdf", () => {})
console.log("🚀 ~ some", some)
// const some = new Some("asdf", () => {})
