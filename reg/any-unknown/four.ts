export {};

const keys = ["a", "b"] as const;

// obj will now be typed with the keys 'a' and 'b'
const obj = {} as Record<(typeof keys)[number], string>;

for (const key of keys) {
  obj[key] = key;
}
