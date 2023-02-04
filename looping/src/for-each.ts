export const arr = [1, null, "str", , , , , undefined, {}, 0]

for (const item of arr) {
  console.log("🚀 ~ item", item)
}

console.log("🚀 ~ ----")

// Skips empty items
console.log("🚀 ~ ----" + "forEach")
arr.forEach(item => console.log("🚀 ~ item", item))

// Skips empty items
console.log("🚀 ~ ----" + "map")
arr.map(item => console.log("🚀 ~ item", item))
