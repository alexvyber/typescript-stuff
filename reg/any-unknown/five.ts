export {};

// How on earth do you type this function?

const groupBy = (arr, key) => {
  const result = {};
  arr.forEach((item) => {
    const resultKey = item[key];
    if (result[resultKey]) {
      result[resultKey].push(item);
    } else {
      result[resultKey] = [item];
    }
  });
  return result;
};
