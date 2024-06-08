const one = new Promise<string>((resolve) => {
  resolve("text");
});

let oneRes: string;

one.then((value) => {
  setTimeout(() => {
    oneRes = value;
  }, 1000);
});

console.log("🚀 ~ one ~ one", await one);
console.log("🚀 ~ oneRes ~ oneRes", oneRes);
