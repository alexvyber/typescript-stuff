export {}

const obj: Record<string, string> = {}

obj.id = "123"
// obj.more = 123 // error

// Type 'number' is not assignable to type 'string'.
// const str: string = 123 // error

let id: string | number = "123"

const numericId = 123

if (typeof numericId !== "undefined") {
  id = numericId
}

const routes: Record<string, {}> = {
  "/": {},
  "/users": {},
  "/admin/users": {},
  "/admin": { l: "1" }
}

// No error!
routes.awdkjanwdkjn

const routes_ = {
  "/": {},
  "/users": {},
  "/admin/users": {}
} satisfies Record<string, {}>

// error
// Property 'awdkjanwdkjn' does not exist on type
// '{ "/": {}; "/users": {}; "/admin/users": {}; }'
routes_.awdkjanwdkjn

const _routes_ = {
  // Type 'null' is not assignable to type '{}'
  "/": null
} satisfies Record<string, {}>

type User = {
  id: string
  name: {
    first: string
    last: string
  }
}

const user = {} as User

// No error! But this will break at runtime
user.name.first

// Conversion of type 'string' to type 'number'
// may be a mistake because neither type
// sufficiently overlaps with the other.
const str = "my-string" as number

const str2 = "my-string" as unknown as number

type UserTwo = {
  id: string
  name: string
}

// The user hasn't been constructed yet, so we need
// to use 'as' here
const userToBeBuilt = {} as UserTwo

;(["name", "id"] as const).forEach(key => {
  // Assigning to a dynamic key!
  userToBeBuilt[key] = "default"
})

type UserThree = {
  id: string
  name: string
}

const defaultUser = {
  id: "123",
  name: "Matt"
} as UserThree

const routes__ = {
  "/": {},
  "/users": {},
  "/admin/users": {}
}

// OK!
routes__["/"]

// Property 'awdahwdbjhbawd' does not exist on type
// { "/": {}; "/users": {}; "/admin/users": {}; }
routes__["awdahwdbjhbawd"]

const defaultUser_ = {
  id: "123",
  name: "Matt"
} satisfies UserThree

// colon annotation

let id_: string | number = "123"

if (typeof numericId !== "undefined") {
  id_ = numericId
}

// satisfies

let id__ = "123" satisfies string | number

if (typeof numericId !== "undefined") {
  // Type 'number' is not assignable to type 'string'.
  id__ = numericId
}

// The rule of thumb is that you should only use satisfies in two specific situations:
// - You want the EXACT type of the variable, not the WIDER type.
// - The type is complex enough that you want to make sure you didn’t mess it up
