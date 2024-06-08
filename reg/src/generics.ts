export {};

const objKeys = <T extends object>(obj: T) => Object.keys(obj) as Array<keyof T>;

const obj = {
  one: 1,
  two: "two",
  three: [1, 2, 3],
};

const resArr = objKeys(obj);
