let data: (string | number)[] = ["Cosmos", 13, 50, "Star"]

for (const dataPoint in data) {
  console.log(dataPoint)
  console.log(typeof dataPoint)
  console.log(typeof +dataPoint) // + == parseInt()
  console.log(`${+dataPoint + 1}- ${data[dataPoint]}`)
}
