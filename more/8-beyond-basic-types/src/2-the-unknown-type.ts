export {};

let someStr: unknown = "Hey";
let discount: unknown = 25;

let otherNum: number = discount;

//
let discount_: unknown = 25;
let discount__: unknown = "25";

let otherNum_: number = typeof discount === "number" ? discount : 10;
console.log(otherNum);

//
let courseName_: any = "TS";
let coursePrice_: number = courseName_;
console.log(coursePrice_);

//
let courseName__: any = "TS";
let coursePrice__: unknown = courseName__;

let courseName___: unknown = "TS";
let coursePrice___: any = courseName___;

//
// NOT RECOMMENDED
let courseName____: unknown = "TS";
let coursePrice____: any = courseName____;
let price____: number = coursePrice____;
console.log(price____);

//
// RECOMMENDED
let courseName_____: any = "TS";
let coursePrice: unknown = courseName_____;
let price_____: number = coursePrice_____;
let price______: number = typeof coursePrice === "number" ? coursePrice : 9.99;
console.log(price______);

//
// Unknown absorbs the union
let courseName______: unknown | string = "TS";

let courseName_______: unknown | string = 25;
let product_________: string = courseName_______;

//
// unknown will be absorbed by the intersection type
let courseName________: unknown & string = "TS";

let courseName_________: unknown & string = 25;
let product: string = courseName_________;
