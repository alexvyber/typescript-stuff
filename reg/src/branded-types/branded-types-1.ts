type EmailAddress = string & { __type: "EmailAddress" };

const isEmailAddress = (str: string): str is EmailAddress => str.includes("@");

function assertEmailAddress(str: string): asserts str is EmailAddress {
  if (!str.includes("@")) throw new Error("str is not email");
}

const sendEmail = (_email: EmailAddress) => {};

const signUp = (email: string) => {
  if (isEmailAddress(email)) sendEmail(email);

  // sendEmail(email)

  assertEmailAddress(email);

  sendEmail(email);
};
