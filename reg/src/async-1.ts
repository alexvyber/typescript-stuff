console.log(1);

const po = new Promise<string>((resolve, reject) => {
  resolve("hello");
});

console.log(po);

po.then((val) => {
  console.log(val);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally method...");
  });

console.log(2);

console.log(3);
