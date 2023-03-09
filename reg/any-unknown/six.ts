export {}

const groupBy = (arr: Record<string, unknown>[], key: string) => {
  const result = {}
  arr.forEach(item => {
    const resultKey = item[key]
    if (result[resultKey]) {
      result[resultKey].push(item)
    } else {
      result[resultKey] = [item]
    }
  })
  return result
}
