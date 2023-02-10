var library = {
  version: "6.6.6",
  somePrivateInfo: "super secret"
}
var lib = new Proxy(library, {
  get: function (target, prop, _receiver) {
    console.log("accessed:", prop)
    if (prop === "somePrivateInfo") return "This is hidden property"
    if (!target[prop])
      throw new Error("property ".concat(prop, " does not defined"))
    return target[prop] // ???: wtf wrong with that
  },
  set: function (target, prop, val, receiver) {
    target[prop] = val
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
console.log(lib.somePrivateInfo)
lib.some = "soasdf"
console.log(lib.some)
// lib.notDefinded
