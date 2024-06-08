export {};

function test(arg1: any, arg2: any) {
  console.log(arg1, arg2);
  // @ts-ignore
  console.log(this);
}

// @ts-ignore
const test2 = () => console.log(this);

// test(1, 2)
// test2()

let obj: {
  title?: string;
  description?: string;
  id: number;
} = {
  title: "my obj",
  id: 1984,
};

// test.apply(obj, ["apple", "banana"])
// Reflect.apply(test, obj, ["one", "two"])

console.log(Reflect.has(obj, "title"));
delete obj.title;
console.log(Reflect.has(obj, "title"));

console.log(Reflect.deleteProperty(obj, "description"));

function MyConstructor(this: any, arg1: any, arg2: any) {
  this.prop1 = arg1;
  this.prop2 = arg2;
}

let obj2 = Reflect.construct(MyConstructor, ["one", "two"]);
console.log("🚀 ~ obj2", obj2);
