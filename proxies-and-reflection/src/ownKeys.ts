const library = { version: "666.666.666", name: "Alice" };
const lib = new Proxy(library, {
  ownKeys: (target) => {
    // console.log([...Object.getOwnPropertyNames(target), "some"])
    return [...Object.getOwnPropertyNames(target), "some"];
    // return []
  },
  deleteProperty: (target, prop) => delete target[prop],
  has: (target, prop) => prop in target,
});

for (const prop in lib) {
  console.log(lib[prop]);
  // console.log(prop)
}

console.log(Object.keys(lib));
