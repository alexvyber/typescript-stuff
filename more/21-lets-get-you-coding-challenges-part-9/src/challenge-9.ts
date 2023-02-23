/*  Challenge 9 
What will the following function invocations result in?
*/

function add(price: number, sales?: number) {
  return price * (sales ?? 1)
}
console.log(add(9.99, 4))
console.log(add(10.99))
