export {};

class One {
  some: string;
  constructor() {
    this.some = "asdfasdf";
  }
}

const some = new One();
const other = {};

console.log("🚀 ~ some instanceof One", some instanceof One);
console.log("🚀 ~ some instanceof Object", some instanceof Object);

console.log("🚀 ~ other instanceof Object", other instanceof Object);

const more = Object.create({
  some: "prop",
});

console.log("🚀 ~ more instanceof Object", more instanceof Object);
