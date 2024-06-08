// Challenge 1
type AirConditioner<T> = {
  winter: T;
  summer: T;
};

const myAC: AirConditioner<string> = {
  winter: "Warm",
  summer: "Cold",
};

console.log(myAC);
