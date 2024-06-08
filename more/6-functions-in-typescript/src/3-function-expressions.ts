let holidaySales1 = function (product: string, sales: number, tax: number, discount: number): number {
  let price: number = 0;

  if (product === "pens") price = 29;
  if (product === "erasers") price = 19;
  if (product === "pencils") price = 59;

  let totalSalesforIndividualProduct: number = price * sales;

  return (
    totalSalesforIndividualProduct - tax * totalSalesforIndividualProduct - discount * totalSalesforIndividualProduct
  );
};

const pens: number = holidaySales1("pens", 20, 0.15, 0.25);
const erasers: number = holidaySales1("erasers", 15, 0.12, 0.15);
const pencils: number = holidaySales1("pencils", 50, 0.08, 0.45);

console.log(`The total profit from the sales of pens is $${pens}`);
console.log(`The total profit from the sales of erasers is $${erasers}`);
console.log(`The total profit from the sales of pencils is $${pencils}`);
