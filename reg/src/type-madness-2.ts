export {}
const one = [1, 2, 3, 4].map(
  // error: An arrow function cannot have a 'this' parameter.
  (this: { some: "some" }, item, _index, _array) => item * 2,
  {
    some: "some"
  }
)

const two = [1, 2, 3, 4].map(
  function (this: { some: "some" }, item, _index, _array) {
    console.log(this.some)
    return item * 2
  },
  {
    some: "some"
  }
)
