export const names = ["Kate", "Peter", "John", "Piece of Shit"]

Array.prototype.shit = "shiiiiiiiit"
Array.prototype.moreShit = "mooooooooreeeeeee"

for (const name of names) {
  console.log("🚀 ~ name", name)
}

console.log("-----")

for (const key in names) {
  if (Object.hasOwnProperty.call(names, key)) {
    const element = names[key]
  }

  console.log("🚀 ~ names[key]", names[key])
}

const obj = {
  one: "one",
  two: 2,
  three: [1, 2, 3],
  method: (arg: string) => "string" + arg,
  otherMethod: (arg: string) => parseInt(arg),
  [Symbol("some")]: "some shit"
} as const

function isKeyInObject(
  key: string,
  object: any
): asserts key is Extract<keyof typeof obj, string> {
  if (!(key in object)) throw new Error("aa")
}

function isFunction(func: unknown): asserts func is (...args: any[]) => any {
  if (typeof func !== "function") throw new Error("aa")
}

for (const key in obj) {
  isKeyInObject(key, obj)

  if (typeof obj[key] === "function") {
    const func = obj[key]
    isFunction(func)
    isFunction(obj[key])

    console.log('🚀 ~ obj[key]("111111")', func("111111"))
    console.log('🚀 ~ obj[key]("111111")', obj[key]("111111"))
  } else {
    obj[key]
  }
}

for (const [index, value] of Object.entries(obj)) {
  console.log("🚀 ~ index, value", index, value)
}
