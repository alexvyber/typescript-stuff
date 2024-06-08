/*  Challenge 1 
Create a Product interface with 3 properties, id, name and category and use this interface in a function type annotated with this interface that returns all the interface values as an object
*/

/*  Challenge 2 
What will the dog name log?
*/

type Cat = {
  name: string;
};

interface Dog {
  name: string;
}

const cat: Cat = { name: "George" };
const dog: Dog = cat;
console.log(dog.name);

/*  Challenge 3 
Create an interface called ProductName and a second interface called ProductPrice that extends the first interface. Finally create an object from the second interface
*/

/*  Challenge 4 
Create an object type called ProductName and an interface called ProductPrice that extends the object type ProductName. Finally create an object from the interface
*/
