// Challenge 3
type Employee = {
  name: string;
};

function myFunc(employeeOrEmployees: Employee | Employee[]) {
  if (Array.isArray(employeeOrEmployees)) {
    return employeeOrEmployees.length;
  } else {
    return employeeOrEmployees.name;
  }
}

console.log(myFunc([{ name: "John" }, { name: "Jane" }]));
console.log(myFunc({ name: "Jen" }));
