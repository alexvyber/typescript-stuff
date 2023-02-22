// Challenge 2
type SmartPhone<T1, T2, T3> = {
  manufacturer: T1
  model: T2
  rating: T3
}

const myPhone: SmartPhone<string, string, number> = {
  manufacturer: "Samsung",
  model: "J6+",
  rating: 3.5,
}

const phoneSpecs: (string | number | boolean)[] = [
  myPhone.manufacturer,
  myPhone.model,
  myPhone.rating,
]

console.log(phoneSpecs)
