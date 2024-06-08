/*  Challenge 15 
What will the course variable log?
*/

export type Product = {
  name: string;
};

class TSCourse implements Product {
  constructor(public name: string) {}
}

let course = new TSCourse("TS Bootcamp");
console.log(course);
