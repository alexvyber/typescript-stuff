let firstPassword1: number | string = "12345"
let firstPassword2: number | string = 12345

let tip = (billAmount: number, tipPercentage: string | number): number => {
  if (typeof tipPercentage === "number") {
    return billAmount * tipPercentage
  } else {
    let calculatedTip: number = billAmount * (parseInt(tipPercentage) / 100)
    return calculatedTip
  }
}

let tipAmpunt1 = tip(100, 0.15)
let tipAmpunt2 = tip(100, "20 percent")

console.log("🚀 ~ tipAmpunt1:", tipAmpunt1)
console.log("🚀 ~ tipAmpunt2:", tipAmpunt2)
