/*  Challenge 11 
What will the function invocation result in?
*/
export {}

type SucceededAPICall = {
  response: "success"
  value: number
}

type FailedAPICall = {
  response: "failure"
  reason: string
}

type APICall = SucceededAPICall | FailedAPICall

function APICallStatus(s: string): APICall {
  const n: number = Number(s)

  if (Number.isNaN(n))
    return {
      response: "failure",
      reason: "the string passed cannot be converted into a number",
    }

  return { response: "success", value: n }
}

console.log(APICallStatus("10").value)
