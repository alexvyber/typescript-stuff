export {};

const numbers: number[] = [1, 4, 5, 3, 2];
numbers.push(6);
numbers.sort();

// Storing by reference
const nums = numbers;
nums.push(7);
console.log("Original (copy) Array", nums);
console.log("Original Array", numbers);
//
const originalObj = { name: "TS" };

const copyObj = originalObj;
copyObj.name = "JS";
console.log(copyObj);
console.log(originalObj);
//

// Storing by value
let myName = "Muslim";
let newName = myName;
myName = "John";

console.log("Original Name:", myName);
console.log("New Name:", newName);

//
const numbers_: ReadonlyArray<number> = [5, 2, 3, 1];
// numbers.push()
// numbers.sort()

console.log(numbers.indexOf(1));
console.log(numbers.length);

const strings: ReadonlyArray<string> = ["Hi", "Hey"];
