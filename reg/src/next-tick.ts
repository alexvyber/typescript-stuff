new Promise((resolve, reject) => {
  resolve("orange");
  console.log("bread");
}).then((val) => {
  console.log(val); //micro
});

setTimeout(() => {
  console.log("apple"); // macro
}, 1);

console.log("peach"); // sync

process.nextTick(() => {
  console.log("next tick");
});

// bread
// peach
// next tick
// orange
// apple
