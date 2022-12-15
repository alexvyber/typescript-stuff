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

export {}

// --

const LOG_LEVEL = {
  DSEBUG: "debug",
  WARNING: "warning",
  EROOR: "error"
} as const

type LogLevel = keyof typeof LOG_LEVEL

const log = (msg: string, level: LogLevel) => {
  console.log(`${LOG_LEVEL[level]}: ${msg}`)
}
