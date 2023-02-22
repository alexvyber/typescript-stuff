export {}

type NestedArray = number | NestedArray[]

const numbers1: NestedArray = [1, 2]
const numbers2: NestedArray = [1, [2, 3, 4]]
const numbers3: NestedArray = [1, [2, 3, [4]]]
const numbers4: NestedArray = [1, [2, 3, [4, 5, [6]]]]
const numbers5: NestedArray = [1, [2, 3, [4, 5, [6, 7, 8, [9]]]]]
const numbers6: NestedArray = [1, [2, 3, [4, 5, [6, 7, 8, [9, [10]]]]]]

type GenericNestedArray<T> = T | GenericNestedArray<T>[]

const generic: GenericNestedArray<{ name: string }> = [{ name: "asdf" }, { name: "asdf" }]
const generic2: GenericNestedArray<{ name: string }> = [
  { name: "asdf" },
  { name: "asdf" },
  [{ name: "asdf" }, { name: "asdf" }],
]
const generic3: GenericNestedArray<{ name: string }> = [
  { name: "asdf" },
  { name: "asdf" },
  [{ name: "asdf" }, { name: "asdf" }],
  [{ name: "asdf" }, { name: "asdf" }, [{ name: "asdf" }, { name: "asdf" }]],
  [
    { name: "asdf" },
    { name: "asdf" },
    [{ name: "asdf" }, { name: "asdf" }],
    [{ name: "asdf" }, { name: "asdf" }, [{ name: "asdf" }, { name: "asdf" }]],
  ],
]
