"use strict"
exports.__esModule = true
var AuthMethod = {
  github: "github",
  email: "email",
  google: "google"
}
var doThing = function (authMethod) {}
doThing("github")
doThing(AuthMethod.github)
