export {}

const groupBy = (arr: Record<string, unknown>[], key: string) => {
  const result = {}
  arr.forEach(item => {
    const resultKey = item[key] as string

    // No index signature with a parameter of
    // type 'string' was found on type '{}'.
    if (result[resultKey]) {
      //^^^^^^^^^^^^^^^^^

      result[resultKey].push(item)
    } else {
      result[resultKey] = [item]
    }
  })
  return result
}
