export {};

let i = 0;

function one() {
  console.log(i++);
  one();
}

one();
