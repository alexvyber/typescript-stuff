"use strict"
exports.__esModule = true
var AuthMethod
;(function (AuthMethod) {
  AuthMethod[(AuthMethod["github"] = 0)] = "github"
  AuthMethod[(AuthMethod["email"] = 1)] = "email"
  AuthMethod[(AuthMethod["google"] = 2)] = "google"
})(AuthMethod || (AuthMethod = {}))
console.log(AuthMethod)
var doThing = function (authMethod) {}
doThing(0x123) // no issue with this
// doThing("123")
// ~~
var AuthMethodWithStrings
;(function (AuthMethodWithStrings) {
  AuthMethodWithStrings["github"] = "github"
  AuthMethodWithStrings["email"] = "email"
  AuthMethodWithStrings["google"] = "google"
})(AuthMethodWithStrings || (AuthMethodWithStrings = {}))
console.log(AuthMethodWithStrings)
var doOtherThing = function (authMethod) {}
// doOtherThing(123)
// doOtherThing("sms")
// doOtherThing(AuthMethodWithStrings.notInEnum)
doOtherThing(AuthMethodWithStrings.github)
