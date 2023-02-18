class User {
  firstName: string
  lastName: string
  fullName: string
  email: string
  constructor({
    firstName,
    lastName,
    email
  }: Omit<
    // NOTE: Intentionally for funn overcomplex type
    {
      [prop in keyof User as User[prop] extends (...args: any[]) => any
        ? never
        : prop]: User[prop]
    },
    "fullName"
  >) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = `${this.firstName} ${this.lastName}`
    this.email = email
  }

  checkLastOnline() {
    console.log(`${this.fullName} was last online at ${Date.now()}`)
  }

  sendEmail() {
    console.log(`Email sent to ${this.email}`)
  }

  delete() {
    console.log("User removed")
  }
}

const user = new User({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com"
})

const user2 = new User({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com"
})

console.log(user.delete === user2.delete)
