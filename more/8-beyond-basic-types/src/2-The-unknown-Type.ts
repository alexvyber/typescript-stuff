let someStr: unknown = "Hey";
let discount: unknown = 25;

let otherNum: number= discount

// ---
let discount: unknown = 25;
let discount: unknown = "25";

let otherNum: number = typeof discount === "number" ? discount : 10;
console.log(otherNum);

// -----
let courseName: any = "TS";
let coursePrice: number = courseName;
console.log(coursePrice);

// -----
let courseName: any = "TS"
let coursePrice: unknown = courseName

let courseName: unknown = "TS";
let coursePrice: any = courseName;

// -----
// NOT RECOMMENDED
let courseName: unknown = "TS";
let coursePrice: any = courseName;
let price: number = coursePrice;
console.log(price);

// -----
// RECOMMENDED
let courseName: any = "TS";
let coursePrice: unknown = courseName;
let price: number = coursePrice;
let price: number = typeof coursePrice === "number" ? coursePrice : 9.99;
console.log(price);

// -----
// Unknown absorbs the union
let courseName: unknown | string = "TS"

let courseName: unknown | string = 25
let product: string = courseName

// -----
// unknown will be absorbed by the intersection type
let courseName: unknown & string = "TS"

let courseName: unknown & string = 25
let product: string = courseName
