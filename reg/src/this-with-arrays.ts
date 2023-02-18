export {}

class Some {
  one = "asdf"
  two: string

  constructor() {
    this.two = "some shit " + Math.random()
  }

  getShit() {
    return Math.random()
  }
}

const asdf = [1, 2, 3, 4].map(function (this: Some, item, _index, _array) {
  console.log(this.getShit() * 100)

  return { ["some" + Math.random()]: item * 10000 * Math.random() }
}, new Some())

console.log("🚀 ~ asdf", asdf)
