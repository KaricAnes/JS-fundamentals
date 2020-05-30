//Equality operators ----------------------------------------------------------------------

// ==    type conversion

// === najbolj je njega koristiti. Poredi da li je nsto identicno.

// !=   --> type conversion, nije dobro  ist == se ponasa

//!== --> najcesce se koristi   isto === se ponasa

console.log(1 == 1); //true
console.log(1 == "1"); //true
console.log(1 === "1"); //false
console.log(1 == true); //true
console.log(1 === true); //false

let id = 123;
console.log(id === "123"); //false
console.log(id == "123"); //true

let broj = 555;
console.log(broj != "555"); //false
console.log(broj !== "555"); //true

//Unary operators --------------------------------------------------------------------------------

/**

++var1                  ////will ne incremented before it is used in expression 
var1++                  //will ne incremented only after its use

--var1          
var1--

+var1          //converts string to number 
-var1          //changes sign. Ako je bio pozitivan, sada ce biti negativan 
 */

let year = 1967;
console.log(++year); //1968                                            ++var

let num = 5;
console.log(num++); //5                                                var++
console.log(num); //6

let num2 = "5";
console.log(typeof num2);

console.log(+num2); //string
console.log(typeof +num2); //number

let num3 = "1";
let num4 = 2;

console.log(num3 + num4); //12 wtf
console.log(+num3 + num4); //3 kako i treba.                              //+var

//Logical operators  ---------------------------------------------------
//if(var1 > 5 && var2 < 100)        &&

//if(var1 > 5 || var2 < 100)        ||

//if((var1 > 5 || var2 < 100) && var3 === 5) {}

// var2 && var2  ako su oba true var2 ce se pikati

//!var1        converts to boolean

if (5 === 5 && 6 === 7) {
  // &&
  console.log(true);
} else {
  console.log(false); //false
}

if (5 === 5 || 6 === 7) {
  // &&
  console.log(true); //true
} else {
  console.log(false);
}

let userSettings = { name: "Joe" };
let defaultSettings = { name: "Default" };

console.log(userSettings || defaultSettings); //{name: 'Joe'}  //ukoliko je prvo drugacije od null, ono ce se pikati.

let userSettings2 = null;
let defaultSettings2 = { name: "Default" };

console.log(userSettings2 && defaultSettings2); //{name: 'default'} null sada  //ukoliko je ovo lijevo uredu, desni dio koda ce se izvrsiti

//! not symbol. Pretvara nesto iz false-a u true i obratno. negira trenutno stanje

let car = null;
console.log(!car); //true

let car5 = 4;
console.log(!car5); //false

let car6 = ""; //ovo je false jer je prazno  'a' ovo je true
console.log(!car6); //true

//najcesca upotreba
let car8 = null;
if (!car8) {
  car8 = {};
}

//Relatinal Operators    -----------------------------------------------------------------
//< > >= <=

let s1 = "Zo";
let s2 = "alphabet";

if (s1.toUpperCase() > s2.toUpperCase()) {
  console.log(true);
} else {
  console.log(false); //ne kontam ASCI2 kako radi i sta poredi
}

//Condititonal Operators       ????????????????????????????????????? ::::::::::::::::::::::::::::::::::

/**
 var1 += 10;
 var1 -= 10;
 var1 /= 10;
 var1 *= 10;
 var1 %= 10;

 */

let foo = 8;

let result = foo > 7 ? (foo = 1) : (foo = 10);
console.log(foo); //1

//Assignament Operators

// var1 += 10;          --> isto sto i var1 = var1 + 10;            -=

let incr = 5;
let res = 1;

res += incr;
console.log(res); //6
