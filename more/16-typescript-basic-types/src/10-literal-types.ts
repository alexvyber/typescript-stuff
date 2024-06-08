export {};

let myNumber: 45 = 45;
let myString: "Holiday" = "Holiday";

type CourseDiscounts = 25 | 35 | 45 | 75;

let courseDiscounts: CourseDiscounts = 30;

let tip = (billAmount: number, tipPercentage: 0.15 | 0.2 | 0.25): number => {
  if (typeof tipPercentage === "number") {
    return billAmount * tipPercentage;
  } else {
    let calculatedTip: number = billAmount * (parseInt(tipPercentage) / 100);
    return calculatedTip;
  }
};

let tipAmpunt1 = tip(100, 0.15);
let tipAmpunt2 = tip(100, "20 percent");

console.log("🚀 ~ tipAmpunt1:", tipAmpunt1);
console.log("🚀 ~ tipAmpunt2:", tipAmpunt2);

type FrontEndWebDev = "HTML" | "CSS" | "JavaScript" | "React";

let frontendPathInlcudes: FrontEndWebDev = "HTML";
