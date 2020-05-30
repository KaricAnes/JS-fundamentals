console.log(typeof 1); //number
console.log(typeof true); //boolean
console.log(typeof "Hello"); //string
console.log(typeof function () {}); //function
console.log(typeof {}); //object
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof NaN); //number

//Common Type Conversions

//convert String to integer
let a = "55";

a = Number.parseInt(a);
console.log(typeof a); //number

//Number.parseInt
console.log(Number.parseFloat("55.88ABC")); //55.88
console.log(Number.parseFloat("A55.88ABC")); //NaN

