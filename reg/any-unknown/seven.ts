export {};

const groupBy = (arr: Record<string, unknown>[], key: string) => {
  const result = {};
  arr.forEach((item) => {
    const resultKey = item[key];

    // Type 'unknown' cannot be used as an index type.
    if (result[resultKey]) {
      //       ^^^^^^^^^

      result[resultKey].push(item);
    } else {
      result[resultKey] = [item];
    }
  });
  return result;
};
