// Challenge 4
function someFunc<Elements>(elements: Array<Elements>): Elements {
  return elements[elements.length - 1];
}

someFunc<number>([1, 2, 3]);
someFunc<boolean>([false, true]);
someFunc<string>(["Hey", "Hi"]);
