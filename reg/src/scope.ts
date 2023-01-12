// scope.ts

const func = (someFunc: () => { message: string }) => {
  const message = "Some message..."

  //❗ error: Cannot redeclare block-scoped variable 'message'.ts(2451
  const { message } = someFunc()

  return message
}

// scope.ts

const aliasFunc = (someFunc: () => { message: string }) => {
  const message = "Some message..."

  const { message: someMessage } = someFunc()
  console.log("🚀 ~ ", someMessage)

  return message
}

// scope.ts

const otherFunc = (someFunc: () => { message: string }) => {
  const message = "Some message..."

  {
    const { message } = someFunc()
    console.log("🚀 ~ ", message)
  }

  return message
}
