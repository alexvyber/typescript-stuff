function getRandom<T extends readonly string[]>(...args: T): T[number] {
  return args[Math.floor(Math.random() * args.length)];
}

const options = getRandom("one", "two", "three", "four");

function getStuff(opts: typeof options): string {
  switch (opts) {
    case "one":
      return opts + Math.random();

    case "two":
      return opts + Math.random();

    case "three":
      return opts + Math.random();

    case "four":
      return opts + Math.random();
  }
}

function getStuff2(opts: typeof options): string {
  let str = "";
  switch (opts) {
    case "one":
      str = opts + Math.random();
      break;

    case "two":
      str = opts + Math.random();
      break;

    case "three":
      str = opts + Math.random();
      break;

    case "four":
      str = opts + Math.random();
      break;

    default:
      assertNeverReach(opts);
  }

  return str;
}

function assertNeverReach(arg: never) {
  throw new Error(`${arg} must be never something`);
}
