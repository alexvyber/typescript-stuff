enum AuthMethod {
  github = 0,
  email = 1,
  google = 2
}

console.log(AuthMethod)

const doThing = (authMethod: AuthMethod) => {}

doThing(0x123) // no issue with this
// doThing("123")

// ~~

enum AuthMethodWithStrings {
  github = "github",
  email = "email",
  google = "google"
}

console.log(AuthMethodWithStrings)

const doOtherThing = (authMethod: AuthMethodWithStrings) => {}

// doOtherThing(123)
// doOtherThing("sms")
// doOtherThing(AuthMethodWithStrings.notInEnum)
doOtherThing(AuthMethodWithStrings.github)

export {}
