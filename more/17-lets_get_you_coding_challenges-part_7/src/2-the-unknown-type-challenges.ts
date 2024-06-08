/*  Challenge 1 
What is the value of the movieTicketPrice variable?
*/

let favMovie: unknown = "The Good, the Bad and the Ugly";
let someMovie: any = favMovie;
let movieTicketPrice = someMovie;
console.log(movieTicketPrice);

/*  Challenge 2 
What is the value of the songName variable?
*/

const favSong: unknown = "Un Dia";
const songName: string = typeof favSong === "string" ? favSong : "";

console.log(songName);

/*  Challenge 3 
Stop the following code from compiling by fixing the error-prone type annotation
*/

const productPrice: any = 10.99;
const courseName: string = productPrice;
