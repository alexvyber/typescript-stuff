let discount: number

function specialDiscount(holidaySeason: boolean): number {
  if (holidaySeason) {
    return (discount = 0.25)
  } else {
    return (discount = 0.15)
  }
}

let holidayDiscount = specialDiscount(true)
// let holidayDiscount = specialDiscount(false);
// let holidayDiscount = specialDiscount(null);
// let holidayDiscount = specialDiscount(undefined);
console.log(holidayDiscount)
