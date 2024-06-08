// const numArr = [...Array(100).map(item => item)]
// console.log("🚀 ~ numArr", numArr)

const arr = [...Array(100)].map((_, index) => Math.floor(Math.random() * 100) * index);

console.log("🚀 ~ arr", arr);

const filteredArr = arr.filter((item) => item < 1500);
console.log("🚀 ~ filteredArr", filteredArr);
