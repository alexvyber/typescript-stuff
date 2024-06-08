export {};

type Some = {
  name: string;
  printName: () => void;
  callMethod: () => void;
};

class SomeClass implements Some {
  name;
  method;

  constructor({ name, method }: { name: string; method: (arg: any) => void }) {
    this.name = name;
    this.method = method;
  }

  callMethod() {
    this.method(this.name);
  }

  printName() {
    return this.name;
  }
}

const some = new SomeClass({
  name: process.argv[2],
  method: (arg: any) => console.log("arg!!!!!!!!!!!!!!!!" + arg),
});

console.log("🚀 ~ some.callMethod()", some.callMethod());
console.log("🚀 ~ some.name", some.name);
// console.log("🚀 ~ some.printName()", some.printName())
