let mixData: (string | number)[] = ["Cosmos", 13, 50, "Star"]

for (const item of mixData) console.log(item)
for (const item of mixData.entries()) console.log(item[0], item[1])
for (const [i, item] of mixData.entries()) console.log(`${i + 1}- ${item}`)
