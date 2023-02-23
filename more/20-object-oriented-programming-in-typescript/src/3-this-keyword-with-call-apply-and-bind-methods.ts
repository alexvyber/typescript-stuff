// 1
const person = {
  objFunc(): void {
    console.log("Object", this)
  },
}

// person.objFunc();

// 2
class Test {
  classFunc(): void {
    console.log("Class", this)
  }
}

let test = new Test()
test.classFunc()

// 3
function addition(): void {
  console.log("Function", this)
}

function addition1(this: { name: string }, a: number, b: number): void {
  console.log("🚀 ~ addition1 ~ this.name:", this.name)
  console.log("Function", this, a + b)
}

// addition.call({ name: "John" }, 10, 50)
// addition.apply({ name: "John" }, [10, 32])

addition1.call({ name: "John" }, 10, 50)
addition1.apply({ name: "John" }, [10, 32])

let operation1 = addition.bind({ name: "John" }, 25, 35)
let operation2 = addition.bind({ name: "John" }, 250, 350)

operation1()
operation2()
