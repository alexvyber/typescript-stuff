export {};

type NoInfer<A extends any> = [A][A extends any ? 0 : never];

const compare = <T>(a: T, b: T) => a === b;

const one = compare(1, 3);
// @ts-expect-error
const two = compare(1, "3");

const compareWithSecond = <T>(a: NoInfer<T>, b: T) => a === b;

const one_ = compareWithSecond(1, 3);
// @ts-expect-error
const two_ = compareWithSecond(1, "3");

const nonCompare = <T>(a: NoInfer<T>, b: NoInfer<T>) => a === b;

const one__ = nonCompare(1, 3);
const two__ = nonCompare(1, "3");
