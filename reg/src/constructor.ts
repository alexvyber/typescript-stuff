export {}
// type SomeConstructor = new (prop: Obj["prop"], method: Obj["method"]) => void
// type SomeConstructor = {
//   new (s: string): Obj;
// };

// const OtherConstructor: SomeConstructor =  () => {
//   return new
// }

// // @ts-ignore
// const MyConstructor: (
//   this: any,
//   prop: string,
//   method: (...args: any[]) => any
//   // @ts-ignore
// ) => SomeObject = (prop: Obj["prop"], method: Obj["method"]) => {
//   // @ts-ignore
//   this.prop = prop
//   // @ts-ignore
//   this.method = method
// }

// --

type SomeObject = {
  prop: string
  method: (...args: any[]) => void
}

type SomeConstructor = {
  new (prop: string, method: (...args: any[]) => void): SomeObject
}

function MyConstructor(
  this: any,
  prop: string,
  method: (...args: any[]) => any
) {
  this.prop = prop
  this.method = method
}

const some = new (MyConstructor as unknown as SomeConstructor)("asdf", () => {})
console.log("🚀 ~ some", some)

console.log("🚀 ~ some.prop", some.prop)

console.log("🚀 ~ some.method", some.method)
