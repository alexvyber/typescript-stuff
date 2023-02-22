// AND
console.log("" && 5)
console.log(0 && 5)
console.log(false && 5)
console.log(null && 5)
console.log(undefined && 5)
console.log(NaN && 5)

console.log("hi" && "hey")
console.log("hi" && 0)
console.log(false && 0)

// OR
console.log("" || 5)
console.log(0 || 5)
console.log(false || 5)
console.log(null || 5)
console.log(undefined || 5)
console.log(NaN || 5)

console.log("hi" || "hey")
console.log("hi" || 0)
console.log(false || 0)

// ??
console.log("" ?? 5)
console.log(0 ?? 5)
console.log(false ?? 5)
console.log(null ?? 5)
console.log(undefined ?? 5)
console.log(NaN ?? 5)

console.log("hi" ?? "hey")
console.log("hi" ?? 0)
console.log(false ?? 0)

// Null-ish Coalescing Operator
// NUll        => null
// Undefined   => null-ish
