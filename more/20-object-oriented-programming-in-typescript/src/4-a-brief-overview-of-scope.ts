// Global Scope
var myName: string = "John";
let myName: string = "John";
const myName: string = "John";

function someName() {
  console.log(myName);
}

someName();

console.log(myName);

// Local Scope
function myFunc() {
  var num: number = 10;
  console.log(num);
}
myFunc();

console.log(num);

// block Scope

{
  var num1: number = 100;
  let num2: number = 200;
  const num3: number = 300;

  console.log("var inside the block", num1);
  console.log("let inside the block", num2);
  console.log("const inside the block", num3);
}

console.log("var outside the block", num1);
console.log("let outidse the block", num2);
console.log("const outside the block", num3);
