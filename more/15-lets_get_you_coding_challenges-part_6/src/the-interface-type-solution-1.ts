// Challenge 1
interface Product {
  readonly id: number;
  name: string;
  category: string;
}

function getProductInfo(id: number, name: string, category: string): Product {
  return {
    id,
    name,
    category,
  };
}

let product: Product = getProductInfo(1, "Qwik", "Technology");
console.log(product);
