export {};

// type Obj = { one: number; two?: string; three?: boolean }
type Obj = { [key in string]: boolean | string | number | object };

const some: Obj = {
  one: 1,
};

some.two = "two";

const other: Obj = Object.create(some, {
  three: {
    value: false,
    enumerable: true,
    configurable: false,
    writable: false,
  },
});

other.four = {};

Object.assign(other, { five: "zalupa" });
// delete other.three

Object.defineProperty(other, "six", {
  value: "SIX_SIX",
  enumerable: true,
  configurable: false,
  writable: false,
});

Object.defineProperties(other, {
  seven: {
    value: 7,
    enumerable: true,
    configurable: false,
    writable: false,
  },
  eight: {
    value: "SOME SHIT",
    enumerable: true,
    configurable: false,
    writable: false,
  },
});

// Object.preventExtensions(other) // !
// Object.seal(other) // !!
// Object.freeze(other) // !!!

console.log("🚀 ~ other", other);

for (const prop in other) {
  const descriptorObj = Object.getOwnPropertyDescriptor(other, prop);
  // console.log("🚀 ~ descriptorObj", descriptorObj)
  console.log("🚀 ~ prop", prop, " - ", other[prop]);
}
