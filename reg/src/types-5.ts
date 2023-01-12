// types-5.ts

type Some = {
  one: string
  two: number
}

type More = {
  one: string
  two: number
}

//👇 default and named export in one line
export { Some as default, More }
