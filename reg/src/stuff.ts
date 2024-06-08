export {};

// function outer(str: string) {
//   console.log("🚀 ~ outer ~ str", str)
//   str = "asdf"
//   console.log("🚀 ~ outer ~ str", str)
// }

// outer("sssssssss")

function some(one: any, two: any, three: any) {
  console.log("🚀 ~ some ~ arguments", arguments);
  console.log("🚀 ~ one,two,three", one, two, three);
}

// console.log("🚀 ~ some.length", some.length)
// some(1, "two", { one: 1 })

function other(one: any) {
  // console.log(
  //   "🚀 ~ other ~ arguments[Symbol.iterator]",
  //   arguments[Symbol.iterator]
  // )
  // console.log("🚀 ~ other ~ arguments.callee", arguments.callee)
}

// other(123)

const obj = {
  str: "Some Random String",
  print() {
    setTimeout(() => {
      console.log(this.str);
    }, 1000);
  },
  printOld() {
    setTimeout(
      function () {
        // @ts-ignore
        console.log("old " + this.str);
      }.bind(this),
      1000
    );
  },
};

obj.print();
obj.printOld();
