/*  Challenge 3 
Create a function that returns the length of a string array or undefined if the argument is undefined
*/

function returnLength(arr: string[] | undefined) {
  if (!arr) return undefined
  return arr.length
}
