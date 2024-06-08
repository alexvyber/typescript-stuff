export {};

type None = { type: "none" };
type Some<Type> = { type: "some"; value: Type };
type Option<Type> = None | Some<Type>;

const none: None = { type: "none" };
function some<Type>(arg: Type): Some<Type> {
  return {
    type: "some",
    value: arg,
  };
}

// 1 - create

function optionalCatch<T>(fn: () => T): Option<T> {
  try {
    return some(fn());
  } catch (e) {
    return none;
  }
}

function greet(name: string) {
  if (name === "Tom") throw new Error("Fuck all Toms");
  return "Hello" + name;
}

const maybeGreeting = greet("Bob");

// --

async function optionalResolve<Type>(promise: Promise<Type>): Promise<Option<Type>> {
  try {
    return some(await promise);
  } catch {
    return none;
  }
}

async function someFunc() {
  const maybeCount = await optionalResolve(Promise.resolve(69));
  console.log("🚀 ~ someFunc ~ maybeCount", maybeCount);
}
