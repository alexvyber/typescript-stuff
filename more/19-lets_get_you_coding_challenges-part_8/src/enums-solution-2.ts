export {}

// Challenge 2

enum Products {
  "TS Bootcamp" = 1,
  "JS Bootcamp",
  "Python Bootcamp",
  "CSS Layous Masterclass",
  "Flexbox, Grid Course",
}

function setCoursePrice(course: Products) {
  switch (course) {
    case Products["TS Bootcamp"]:
      return "$10.99"
    case Products["JS Bootcamp"]:
      return "$9.99"
    case Products["Python Bootcamp"]:
      return "$11.99"
    case Products["CSS Layous Masterclass"]:
      return "$12.99"
    case Products["Flexbox, Grid Course"]:
      return "$9.99"
    default:
      courseWarning(course)
  }
}

function courseWarning(course: never): never {
  throw new Error(`Course ${course} has not been priced`)
}

//

type Account = {
  accountType: AccountType
  confirmed: boolean
  other: any
}

const AccountTypes = {
  Customer: "CUSTOMER",
  Worker: "WORKER",
  Contractor: "CONTRACTOR",
} as const

type AccountType = (typeof AccountTypes)[keyof typeof AccountTypes]
type AccountTypeKeys = keyof typeof AccountTypes

function setAccountType(account: Account, accountType: AccountTypeKeys): Account {
  switch (accountType) {
    case "Worker":
      return {
        ...account,
        accountType: AccountTypes["Worker"],
        confirmed: Math.random() > 0.5,
      }

    case "Customer":
      return {
        ...account,
        accountType: AccountTypes["Customer"],
        confirmed: Math.random() > 0.5,
      }

    case "Contractor":
      return {
        ...account,
        accountType: AccountTypes["Contractor"],
        confirmed: Math.random() > 0.5,
      }

    default:
      accountError(accountType)
  }
}

function accountError(accountType: never): never {
  throw new Error(`You're trying to assign non-existent accountType: ${accountType} to the account`)
}
