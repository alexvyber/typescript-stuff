/*  Challenge 12 
What will the console log?
*/

export {};

type SucceededAPICall = {
  response: "success";
  value: number;
};

type FailedAPICall = {
  response: "failure";
  reason: string;
};

type APICall = SucceededAPICall | FailedAPICall;

function APICallStatus(s: string): APICall {
  const n: number = Number(s);
  if (Number.isNaN(n)) {
    return {
      response: "failure",
      reason: "the string passed cannot be converted into a number",
    };
  } else {
    return { response: "success", value: n };
  }
}

let apiCallResult = APICallStatus("10");
console.log(apiCallResult.response === "success" ? apiCallResult.value : undefined);
