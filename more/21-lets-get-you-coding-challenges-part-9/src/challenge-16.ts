/*  Challenge 16 
What will the course variable log?
*/

export interface Product {
  name: string;
}

class TSCourse implements Product {
  constructor(public name: number) {}
}

let course = new TSCourse("TS Bootcamp");
console.log(course);
