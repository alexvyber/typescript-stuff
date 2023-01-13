export {}

type Obj = {
  msg: string
  list: string[]
} & ThisType<Obj>

type ObjectDescriptor<D, M> = {
  data?: D
  methods?: M & ThisType<D & M> // Type of 'this' in methods is D & M
}

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  const data: object = desc.data || {}
  const methods: object = desc.methods || {}

  return { ...data, ...methods } as D & M
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx // Strongly typed this
      this.y += dy // Strongly typed this
    }
  }
})

//

function Parent() {
  // @ts-ignore
  this.msg = "hello"

  // @ts-ignore
  this.list = ["apple", "banana", "orange"]
}

let a = {}

console.log("🚀 ~ a", a)

const more = Parent.call(a)
console.log("🚀 ~ more", more)

//

const asdf = {
  text: "asdfasdf",
  list: [1, 2, 3]
}

function Outer(obj: { [key: string]: any }) {
  function Inner() {}
  Inner.prototype = obj
  // @ts-ignore
  return new Inner as any
}

const some = Outer(asdf)
console.log("🚀 ~ some", some)
