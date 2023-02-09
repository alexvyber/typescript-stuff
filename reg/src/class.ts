export {}

class Some<Some, Other> {
  some: Some
  other: Other
  constructor(some: Some, other: Other) {
    this.some = some
    this.other = other
  }

  doStuff() {
    return [this.some, this.other] as const
  }

  anotherStuff() {
    return this.some
  }
}

const some = { some: "some" }
const other = { other: "other" }

const another = new Some(some, other)

const returnAnother = another.doStuff()
returnAnother[0].some
returnAnother[1].other

const returnAnotherStuff = another.anotherStuff()
returnAnotherStuff.some
