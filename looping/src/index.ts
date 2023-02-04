export const arr = [1, 2, 3, 4, 5]

for (const item of arr) {
  console.log("🚀 ~ item", item)
}

for (const [index, item] of arr.entries()) {
  console.log("🚀 ~ index, item", index, item * 10)
}

const sexes = {
  male: "male",
  female: "female"
} as const

const table = [
  ["Name", "Age", "Sex"],
  ["Susan", 88, sexes.female],
  ["Patrick", 99, sexes.male],
  ["Alisha", 111, sexes.female],
  ["Peter", 55, sexes.female]
] as const

const tableWithoutHeadres = table.slice(1)

for (const [name, age, sex] of tableWithoutHeadres) {
  console.log("🚀 ~ name", name)
  console.log("🚀 ~ age", age)
  console.log("🚀 ~ sex", sex)

  console.log(" ---------- ")
}
