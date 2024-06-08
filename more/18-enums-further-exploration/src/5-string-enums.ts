enum Employee {
  Name = "John Smith",
  Job = "Frontend Developer",
}

function getEmployeeInfo(employee: Employee): Employee {
  return employee;
}

console.log(getEmployeeInfo(Employee.Name));
console.log(getEmployeeInfo(Employee.Job));
