const authMethods = ["github", "google", "email"] as const

type AuthMethod = typeof authMethods[number]

const AuthMethodTitles = {
  github: "github",
  email: "email",
  google: "google"
} satisfies {[key in AuthMethod]: string}

type AuthMethodTitle /* string */ = typeof AuthMethodTitles[keyof typeof AuthMethodTitles]

export {}