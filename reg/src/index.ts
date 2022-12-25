const some = <Type>(arg: Type) => {
  return Math.random() > 0.5 ? "some" + Math.random() : 1
}

const more = () =>
  ["one", () => console.log("asdf"), () => ({ name: "Alice" })] as const

type CustomReturnType<Type> = Type extends (...args: any[]) => infer Return
  ? Return
  : never

type R = ReturnType<typeof some>
type RR = CustomReturnType<typeof some>

type T = CustomReturnType<typeof more>
