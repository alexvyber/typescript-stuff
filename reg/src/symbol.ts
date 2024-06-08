const one = Symbol();
const two = Symbol();

// console.log("🚀 ~ one === two", one === two)

const three = Symbol("three");
// console.log("🚀 ~ three", three.description)

const four = Symbol("four");
// console.log("🚀 ~ four", four.toString())

const symbolFor = Symbol.for("some");
const symbolFor2 = Symbol.for("some");

// console.log("🚀 ~ symbolFor === symbolFor2", symbolFor === symbolFor2)

const someOnj = {
  one: 1,
  two: false,
  [Symbol("three")]: [1, 2, 3],
  [Symbol("four")]: {
    one: "1",
    two: true,
  },
};
// console.log("🚀 ~ someOnj", someOnj)

// for (const prop in someOnj) {
//   console.log("🚀 ~ prop", prop)
// }

const [symOne, symTwo] = Object.getOwnPropertySymbols(someOnj);

// console.log("🚀 ~ someOnj[symOne]", someOnj[symOne])
// console.log("🚀 ~ someOnj[symTwo]", someOnj[symTwo])

const mapOne = new Map([
  ["one", 1],
  ["two", 2],
  ["three", 333],
]);

for (const item of mapOne) {
  console.log("🚀 ~ item", item);
}

Map.prototype[Symbol.iterator] = Map.prototype.values;
for (const item of mapOne) {
  console.log("🚀 ~ item", item);
}

Map.prototype[Symbol.iterator] = Map.prototype.keys;
for (const item of mapOne) {
  console.log("🚀 ~ item", item);
}
