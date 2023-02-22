// Challenge 5
// Long version
function decideOperation(num: number, bool: boolean): number {
  if (bool) return num + 1
  return num - 1
}

// Short version
let decideOperation_ = (num: number, bool: boolean): number => (bool ? num + 1 : num - 1)

let operationResult = decideOperation(10, true)
let operationResult_ = decideOperation(10, false)
console.log(operationResult)
