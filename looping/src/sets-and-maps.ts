const set = new Set<{ value: string }>()

set.add({ value: "asdfasdf" })
set.add({ value: "asdfasdfasdf asdf asdf" })

set.forEach(item => console.log("🚀 ~ item", item.value))
