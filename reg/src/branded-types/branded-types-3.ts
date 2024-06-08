type Brand<T, U extends string> = T & { __type: U };
type Password = Brand<string, "Password">;
// type EmailAddress = string & { __type: "EmailAddress" }
const takesInPassword = (password: Password) => {};
// Will error! takesInPassword(‘4123123’)
// Won’t error! takesInPassword(‘4123123’ as Password)

takesInPassword("4123123");
takesInPassword("4123123" as Password);
