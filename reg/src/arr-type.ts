const values = ["a", "b", undefined, "c", undefined];

const filteredValues = values.filter((value): value is string => Boolean(value));

filteredValues; // is now string[]
// ^?
