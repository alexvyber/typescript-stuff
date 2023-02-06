// Setters and Getters

const obj = {
  prop: "some prop",
  get accessProp() {
    return this.prop.toUpperCase()
  },

  set accessProp(arg: string) {
    this.prop = arg.toLowerCase()
  }
}

console.log(obj)
console.log(obj.accessProp)
console.log((obj.accessProp = "other value"))
console.log(obj)

// --

// const cat = {
//   name: "Shiva",
//   color: "white"
// }

Object.defineProperty({ name: "Shiva", color: "white" }, "accessColor", {
  get() {
    return this.color
  },
  set(arg: string) {
    this.color = arg
  },
  enumerable: true,
  configurable: false
})

// Type This shit ???
const getCat = () =>
  Object.defineProperty<{ name: string; color: string; accessColor?: any }>(
    { name: "Shiva", color: "white" },
    "accessColor",
    {
      get() {
        return this.color
      },
      set(arg: string) {
        this.color = arg
      },
      enumerable: true,
      configurable: false
    }
  )

const cat = getCat()

console.log(cat)
console.log(cat.accessColor)
console.log((cat.accessColor = "other value"))
console.log(cat)

// Using Class

class Cat {
  name: string
  color: string
  constructor({ color, name }: { color: string; name: string }) {
    this.name = name
    this.color = color
  }

  get accessColor() {
    return this.color
  }

  set accessColor(arg) {
    this.color = arg
  }
}

const otherCat = new Cat({ name: "Shiva", color: "Orange" })

console.log(otherCat)
console.log(otherCat.accessColor)
console.log((otherCat.accessColor = "other value"))
console.log(otherCat)
