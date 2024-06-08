const timer = setTimeout(() => {
  console.log("one"); // macro
}, 0);

setTimeout(() => {
  console.log("four");
}, 0);

Promise.resolve("three").then((v) => {
  console.log(v);
}); // micro

console.log("timer ID: " + timer);

console.log("two");

// timer
// two
// three // can 3rd
// one
// four
