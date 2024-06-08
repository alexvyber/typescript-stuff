export {};

const timer = setTimeout(() => {
  Promise.resolve("promise in setTimeout callback").then((v) => {
    console.log(v);
  });
  console.log(1); // macro
  setTimeout(() => {
    console.log("setTimeout in setTimeout");
  }, 0);
}, 0);

setTimeout(() => {
  console.log("2nd setTimeout func in global scope");
}, 0);

Promise.resolve(3).then((v) => {
  console.log(v);
}); // micro

console.log("timer ID: " + timer);

console.log(2);
