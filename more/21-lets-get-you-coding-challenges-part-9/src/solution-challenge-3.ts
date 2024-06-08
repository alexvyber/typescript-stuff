// Challenge 3
function myfunc(arg: string[] | undefined): number | undefined {
  // if (arg === undefined) {
  //   return undefined;
  // } else {
  //   return arg.length;
  // }

  return arg && arg.length;
}

console.log(myfunc(undefined));
console.log(myfunc(["Hi", "Hey", "Hello", "There"]));
