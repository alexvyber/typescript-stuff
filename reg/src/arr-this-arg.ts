const some = {
  print: () => console.log("some")
}
const arr = [1, 2, 3]
arr.map(function (this: typeof some, value, index, arr) {
  this.print()
}, some)

export {}
// Print
// some
// some
// some

