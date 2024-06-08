export {};

function factorial(num: number, total: number): number {
  if (num <= 1) return total;
  return factorial(num - 1, num * total);
}

function useFactorial(num: number) {
  return factorial(num, 1);
}

console.log("🚀 ~ useFactorial(100)", useFactorial(10000000000));
