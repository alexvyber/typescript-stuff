export {}

const str = "Some String"

for (const char of str) {
  console.log("🚀 ~ char", char)
}

const [one, two, three, ...rest] = str

console.log("🚀 ~ one", one)
console.log("🚀 ~ two", two)
console.log("🚀 ~ three", three)
console.log("🚀 ~ rest", rest)

const { length, toUpperCase } = str
console.log("🚀 ~ toUpperCase", toUpperCase)
console.log("🚀 ~ length", length)
