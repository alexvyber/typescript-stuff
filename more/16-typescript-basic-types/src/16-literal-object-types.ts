type Student = { fullName: string };

function studentDB(student: { fullName: string }): string {
  return student.fullName;
}

function studentDB1({ fullName }: { fullName: string }): string {
  return fullName;
}

const student = { fullName: "Mark Smith" };

console.log(studentDB({ fullName: "Mark Smith" }));
console.log(studentDB({ fullName: "Jane williams" }));

console.log(studentDB1({ fullName: "Mark Smith" }));
console.log(studentDB1({ fullName: "Jane williams" }));
