/*  Challenge 1 
What is the result of the following variable assignment?
*/

/* Do not comment in unless answered

let vague: number | undefined = null
*/

/*  Challenge 2 
What is the result of the second variable assignment?
*/

/* Do not comment in unless answered

let vague1: boolean | undefined = true ? true : undefined;
let vague2: boolean = vague1;
*/

/*  Challenge 3 
What is the result of the following variable assignment?
*/

/* Do not comment in unless answered

let vague: string | undefined = undefined;
*/

/*  Challenge 4 
What is the value of the vague2 variable? Make sure to check for both boolean and undefined values
*/

/* Do not comment in unless answered

let vague1: boolean | undefined = true ? true : undefined;
// let vague1: boolean | undefined = true ? undefined : true;

let vague2: boolean;

if (vague1 === undefined) {
  vague2 = false;
} else {
  vague2 = true;
}

console.log(vague2);
*/

/*  Challenge 5 
Create a function that produces a value based on the following conditions

1--------- If the argument passed is a string containing a number, it should return the number

2---------If the argument passed is a string not containing a number, it should return undefined

3---------If the argument passed is undefined, it should return undefined
*/
