export {};

const a = {
  msg: "hello",
  list: ["apple", "oranage", "banana"],
  test() {
    console.log("TEST FUNC");
  },
  empty: null,
};

console.log("🚀 ~ a", a);

let b = Object.assign({}, a);

b.list.push("milk");
console.log("🚀 ~ a", a);

b.msg = "hi";
b.test = function SomeNameHERE() {
  console.log("new method");
};

console.log("🚀 ~ b", b);
