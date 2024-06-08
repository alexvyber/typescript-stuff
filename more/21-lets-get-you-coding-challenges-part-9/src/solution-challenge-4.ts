// Challenge 4
function myFunc(arg: number | undefined): number {
  // if (arg === undefined) {
  //   return 1
  // } else {
  //   return arg
  // }

  return arg || 1;
}

console.log(myFunc(10));
console.log(myFunc(undefined));
