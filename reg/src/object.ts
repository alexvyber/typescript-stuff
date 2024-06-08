export {};

const obj = {
  one: 1,
  two: "two",
  three: true,
};

const more = obj;

const arr = Object.entries(obj);
console.log("🚀 ~ arr", arr);

const keys = Object.keys(obj);
console.log("🚀 ~ keys", keys);

const values = Object.values(obj);
console.log("🚀 ~ values", values);

console.log(Object.is("1", 1));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));

console.log("🚀 ~ Object.is(obj, more)", Object.is(obj, more));
