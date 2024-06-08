/*  Challenge 1 
What will the following function invocation print?
*/

type Department = {
  department: string;
};

type Product = {
  name: string;
};

type ProductInfo = Department & Product;

function getProductInfo({ department }: ProductInfo): string {
  return department;
}

console.log(getProductInfo({ department: "Electronics", name: "M8" }));
