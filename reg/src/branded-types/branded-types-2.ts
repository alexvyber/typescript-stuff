export type EmailAddress = string & { typename: "EmailAddress" };

export function isValidEmail(email: string): email is EmailAddress {
  const tester =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  return tester.test(email);
}

export type AllLetters = string & {
  typename: "AllLetters";
};

export function isAllLetters(char: unknown): char is AllLetters {
  if (typeof char !== "string") {
    return false;
  }

  return /^[a-zA-Z]+$/.test(char);
}
