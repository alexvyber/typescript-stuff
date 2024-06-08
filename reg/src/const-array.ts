const friends = ["Alex", "Ben", "Lynn"];

console.log("🚀 ~ friends.hasOwnProperty('push'):", friends.hasOwnProperty("push")); // false

console.log("🚀 ~ Object.prototype:", Object.prototype);
/*
   constructor: ƒ Object()
   hasOwnProperty: ƒ hasOwnProperty()
   isPrototypeOf: ƒ isPrototypeOf()
   propertyIsEnumerable: ƒ propertyIsEnumerable()
   toLocaleString: ƒ toLocaleString()
   toString: ƒ toString()
   valueOf: ƒ valueOf()
*/
// or in
/*
  {} - in bun
  [Object: null prototype] {} - in node or deno
*/

friends instanceof Array; // true
friends instanceof Object; // true

console.log("🚀 ~ friends.hasOwnProperty('push'):", friends.hasOwnProperty("push")); // false
