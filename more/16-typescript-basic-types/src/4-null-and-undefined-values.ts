let discount: number

function specialDiscount(holidaySeason: boolean): number {
  if (holidaySeason) {
    return (discount = 0.25 as const)
  } else {
    return (discount = 0.15 as const)
  }
}

let holidayDiscount = specialDiscount(true)
let holidayDiscount_ = specialDiscount(false)
// let holidayDiscount__ = specialDiscount(null)
// let holidayDiscount___ = specialDiscount(undefined)

// console.log("🚀 ~ discount:", discount)

console.log("🚀 ~ holidayDiscount:", holidayDiscount)
console.log("🚀 ~ holidayDiscount_:", holidayDiscount_)
// console.log("🚀 ~ holidayDiscount__:", holidayDiscount__)
// console.log("🚀 ~ holidayDiscount___:", holidayDiscount___)
