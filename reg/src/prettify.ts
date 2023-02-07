export {}

type Prettify<Type> = {
  [Key in keyof Type]: Type[Key]
} & {}

const some = {
  one: "!!!",
  two: false,
  three: {
    one: 1
  }
}

type SomeType = typeof some
type NewOne = Prettify<typeof some>

type Intersected = {
  a: number
} & {
  c: string
} & {
  b: false
} & {
  obj: {
    one: 1
    two: "some"
  }
}

export type Result = Prettify<Intersected>
//          ^?

export type identity<T> = T
export type flatten<T> = identity<{
  [k in keyof T]: T[k]
}>

export type ResultTwo = flatten<Intersected>
