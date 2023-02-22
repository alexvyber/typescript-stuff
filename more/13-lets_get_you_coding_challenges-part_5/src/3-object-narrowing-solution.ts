export {}

// Challenge 1

type Employee = {
  name: string
  positionTitle: string
  age: number
  hired: boolean
}

let newHiring: Employee = {
  name: "Bill",
  positionTitle: "Junior Developer",
  age: 24,
  hired: true,
}

type EmployeeName = {
  name: string
}

let employeeName: EmployeeName = newHiring
console.log(employeeName)
console.log(employeeName.name)
// Property 'age' does not exist on type 'EmployeeName'.
console.log(employeeName.age)
