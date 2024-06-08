// import { addition } from "./ambient"
import { addition as additionOne } from "ambient";
import { addition as additionTwo } from "ambient";
import * as config from "./config.json";
import { courseReExport } from "./re-export";
import { course, getProductName } from "./ts-modules";
import { getProductName as retriveProductName, course as someCourse } from "./ts-modules";
import defaultCourse from "./ts-modules";
import courseObject from "./ts-modules";
import defaultStringPython from "./ts-modules";
import addOneToOne from "./ts-modules";
import { courseName, released } from "./ts-modules";
import { product, productsList } from "./utils";

console.log(course);
console.log("🚀 ~ someCourse:", someCourse);
console.log("🚀 ~ courseReExport:", courseReExport);

console.log(getProductName({ productName: "ts Bootcamp" }));
console.log(retriveProductName({ productName: "ts Bootcamp" }));

console.log(product);
console.log(productsList);

console.log(defaultCourse);

console.log(courseObject);

console.log(defaultStringPython);

console.log(addOneToOne);

const cool = require("./ts-modules");
console.log("🚀 ~ cool:", cool);

if (released) {
  import("./ts-modules").then(
    (some) => (console.log("🚀 ~ some:", some), console.log(`The course name is ${courseName}`))
  );
}

console.log("🚀 ~ config:", config);

// addition(20, 10)

additionOne(20, 10);

additionTwo(20, 10);

declare module "ambient" {
  export function addition(): string;
}

// addition()
