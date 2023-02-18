import assert from "node:assert"

function selectionSort(arr: number[]) {
  // (A)
  for (let i = 0; i < arr.length; i++) {
    const minIndex = findMinIndex(arr, i)

    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]] // swap
  }
}
function findMinIndex(arr: number[], startIndex: number) {
  // (B)
  let minValue = arr[startIndex]
  let minIndex = startIndex
  for (let i = startIndex + 1; i < arr.length; i++) {
    const curValue = arr[i]
    if (curValue < minValue) {
      minValue = curValue
      minIndex = i
    }
  }
  return minIndex
}

const arr = [4, 2, 6, 3, 1, 5]

selectionSort(arr)

assert.deepEqual(arr, [1, 2, 3, 4, 5, 6])

assert.throws(
  // @ts-expect-error: Object is possibly 'null'. (2531)
  () => null.myProperty,
  TypeError
)
