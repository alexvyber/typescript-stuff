/*  Challenge 2 
What value will the products array log?
*/

const products: string[] = ["Hat", "Jeans", "Jacket"];
const mixedstuff: (string | number)[] = products;
mixedstuff.push(13);

console.log(products);
