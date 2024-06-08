export {};

new Promise((resolve, reject) => {
  const fromResolve = resolve(420);
  console.log("🚀 ~ newPromise ~ fromResolve", fromResolve);
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    // 1st in macro Q
    resolve("orange");
  }, 0);

  console.log("milk");
}).then((val) => {
  // micro Q of the 2nd event loop
  setTimeout(() => {
    // 3rd in macro Q
    console.log("watermelon");
  }, 0);
  console.log(val); // micro
});

setTimeout(() => {
  // 2nd in macro Q
  console.log("apple");
}, 0);

console.log("peach");

// milk
// peach
// orange ???
// apple ???
// watermelon
