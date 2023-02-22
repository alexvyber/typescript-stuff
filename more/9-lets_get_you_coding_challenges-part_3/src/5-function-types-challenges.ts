/*  Challenge 1 
What will the function invocation result in?
*/

function multiply(n: number): number {
  return n * n
}
const result: (n: number) => number = multiply
result(11)

/*  Challenge 2 
What will the function invocation result in?
*/

// function addition(n: number): number {
//   return n + n;
// }
// const result: (n: number) => string = addition;
// result(11);

/*  Challenge 3 
Write a function that can accept number, string and boolean as argument types and returns a string type
*/

/*  Challenge 4 
Write a function that returns an inverted boolean value
*/

/*  Challenge 5 
Write a function that adds 1 to a number, subtracts 1 from a number or does nothing to a number based on a condition. First argument is a number and second argument is either “add”, “subtract” or “do nothing”
*/

/*  Challenge 6 
What will the function invocation result in?
*/

// function someFunc() {
// }
// const myNum: number = someFunc();

/*  Challenge 7 
What will the function invocation result in?
*/

// function callAnotherFunc(func: (price: number, course: string) => string) {
//   return func(10.99, "TS");
// }

// let caller = callAnotherFunc(
//   (price, course) => `The ${course} course has a price of ${price}`
// );
// console.log(caller);

/*  Challenge 8 
Add a type for the function that means it takes no arguments and returns a string
*/

// const result: SomeFunc = () => "TS Bootcamp";
// console.log(result());
