const Obj = {
  asdf: "asdf",
  aasdf: 12
} as const

;(
  Object.entries(Obj) as Array<
    [key: keyof typeof Obj, value: typeof Obj[keyof typeof Obj]]
  >
).map(([key, value]) => {})

Object.entries(Obj).map(([key, value]) => {})
