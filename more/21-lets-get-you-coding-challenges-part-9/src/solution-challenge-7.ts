// Challenge 7
export class Product {
  name: string;
  noOfStudents: number;

  constructor(name: string, noOfStudents: number) {
    this.name = name;
    this.noOfStudents = noOfStudents;
  }

  bestSeller(): string {
    return this.noOfStudents >= 3000 ? "Best Seller" : "Not so Much";
  }
}

const flexCourse = new Product("Flexbox, Grid and Sass Course", 4200);
const pythonCourse = new Product("Python Course", 1300);

console.log(flexCourse.bestSeller());
console.log(pythonCourse.bestSeller());
