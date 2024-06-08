export {};

const keys = ["a", "b"];

// obj will be typed as a record where its
// properties can be any string
const obj: Record<string, string> = {};

for (const key of keys) {
  obj[key] = key;
}
