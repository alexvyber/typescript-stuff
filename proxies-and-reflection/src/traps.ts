let library = {
  version: "6.6.6",
  somePrivateInfo: "super secret"
}

const lib = new Proxy(library, {
  get: (target, prop, _receiver) => {
    console.log("accessed:", prop)

    if (prop === "somePrivateInfo") return "This is hidden property"
    if (!target[prop]) throw new Error(`property ${prop} does not defined`)
    return target[prop] // ???: wtf wrong with that
  },

  set: (target, prop, val, _receiver) => {
    target[prop] = val
    return true
  }
})

// library.version
// -> nothing

// console.log(lib.version)
// -> accessed: version
// 6.6.6

// lib.toString()
// -> accessed: toString
// accessed:

// lib.hasOwnProperty("version")
// console.log(lib.somePrivateInfo)

// lib.some = "soasdf"

// console.log(lib.some)

// lib.notDefinded

console.log((lib.version = "7.7.7"))
console.log(lib.version)
