const AuthMethod = {
  github: "github",
  email: "email",
  google: "google"
} as const

type AuthMethod = typeof AuthMethod[keyof typeof AuthMethod]

const doThing = (authMethod: AuthMethod) => {}

doThing("github")
doThing(AuthMethod.github)

// doThing(123)
// doThing("123")
// doThing(AuthMethod.NotExist)
