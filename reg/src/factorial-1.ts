export {}

function factorial(num: number): number {
  if (num <= 1) return 1
  return num * factorial(num - 1)
}

function factorialSum(num: number): number {
  if (num <= 1) return 1
  return num + factorialSum(num - 1)
}

console.log("🚀 ~ factorialSum(39000)", factorialSum(39909))
console.log("🚀 ~ factorial(39000)", factorial(39909))
