let num1: number = 10
let num2: number = 5
let num3: number = 15

if (num1 > num2) console.log(`${num1} is greater than ${num2}`)

if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`)
} else {
  console.log(`${num1} is less than ${num2}`)
}

if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`)
} else {
  console.log(`${num1} is less than ${num2}`)
}

if (num1 > num3) {
  console.log(`${num1} is greater than ${num3}`)
} else {
  console.log(`${num1} is less than ${num3}`)
}

num1 > num2
  ? console.log(`${num1} is greater than ${num2}`)
  : console.log(`${num1} is less than ${num2}`)

num1 > num3
  ? console.log(`${num1} is greater than ${num3}`)
  : console.log(`${num1} is less than ${num3}`)
