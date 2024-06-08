export {};

const keys = ["a", "b"];

const obj = {};

for (const key of keys) {
  // Element implicitly has an 'any' type because
  // expression of type 'string' can't be used to
  // index type '{}'.
  obj[key] = key;
}

const keys_ = ["a", "b"];

// Phew, no more error
const obj_: any = {};

for (const key of keys) {
  obj_[key] = key;
}
