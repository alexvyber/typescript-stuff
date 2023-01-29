const requiredServerEnvs = [
  "NODE_ENV",
  "DATABASE_URL",
  "SOME_SHIT",
  "SESSION_SECRET",
  "ENCRYPTION_SECRET"
] as const

declare global {
  namespace NodeJS {
    type ProcessEnvType = {
      [key in typeof requiredServerEnvs[number]]: string
    }

    interface ProcessEnv extends ProcessEnvType {}
  }
}

export {}

process.env.SOME_SHIT
