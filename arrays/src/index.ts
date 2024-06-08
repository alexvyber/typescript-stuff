const getArray = <T>(...args: T[]): T[] => {
  return args;
};

const arr1 = getArray<number>(1, 2, 3, 4);
const arr2 = getArray<number>(11, 22, 33, 37, 44);

const arr = Array.of(...arr1, ...arr2);
// console.log(arr)

const found = arr.find((el) => el % 37 === 0);
// console.log(found)

const foundIndex = arr.findIndex((el) => el % 37 === 0);
// console.log(foundIndex)

const arrForEach = arr.forEach((item) => `some ${item}`);
// console.log(arrForEach)

const truthy = arr.every((item) => item > 0);
// console.log(truthy)
const falsy = arr.every((item) => item % 2 === 0);
// console.log(falsy)

// console.log(arr.at(2))
// console.log(arr.at(33))

const concatArr = arr1.concat(arr2);
// console.log(concatArr)

const numArr = [5, 12, 50, 130, 44];

const isLargeNumber = (el: number) => el > 45;

console.log(numArr.findLastIndex(isLargeNumber));
