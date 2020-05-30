console.log("anes");

//const a;     Uncaught SyntaxError: Missing initializer in const declaration

//console.log(a);

const a = 5;

//a = 4; //Assignment to constant variable.

//let vs var scope
if (true) {
  var foo = 5;
}

console.log(foo); //izbaci 5

if (true) {
  let fos = 5;
}
//console.log(fos);   //fos is not defined  error

//REst Parameters

const funkcija = (sviBrojevi) => {
  let sviBrojevicopy = [...sviBrojevi];
  sviBrojevicopy[0] = 4; //[1, 2, 3]
  //sviBrojevi[0] = 7;
  console.log(sviBrojevicopy);
};

const b = [1, 2, 3];
funkcija(b);
console.log(b);

//Array Destructuring

let brojs = [1, 2, 5];

let [car1, car2, car3] = brojs;

console.log(car3); //5

//
let carIdevi = [1, 2, 5];

let auto1, remainingCars;

[auto1, ...remainingCars] = carIdevi;

console.log(car1, remainingCars); //1 [2,5]
//

//
let carIdevi2 = [1, 2, 5];

let remainingCars2;

[, ...remainingCars2] = carIdevi2;

console.log(remainingCars2); //[2, 5]
//

//Object Destructuring
let car = { id: 5000, style: "convertible" };

({ id, style } = car);

console.log(id, style); //5000 "convertible"

//

let ak = 9;
let bk = 8;

[ak, bk] = [bk, ak];

console.log(ak);

//-----------------------------------------------**************************************************
//array Destructuring na najbolji nacin explained

const alphabet = ["A", "B", "C", "D"];
const numbers = [1, 2, 3, 4, 5];

//console.log(alphabet[0]);

let [prvo, drugo] = alphabet;

console.log(drugo);

const newArray = [...alphabet, ...numbers]; //["A", "B", "C", "D", 1, 2, 3, 4, 5]
console.log(newArray);

const newArray2 = alphabet.concat(numbers);
console.log(newArray2); //["A", "B", "C", "D", 1, 2, 3, 4, 5]

const sumAndMultiply = (a, b) => {
  return [a + b, a * b, a / b];
};

const [sum, multiply, division = "no division"] = sumAndMultiply(1, 2); //vise se pika sto je u funkciji

console.log(division); //0.5
//-----------------------------------------------**************************************************

//-------------------------------------------
//Object destructuring na najbolji nacin objasnjeno

const personOne = {
  name: "Anes",
  age: 24,
  favouriteFood: "cevapi",
};

const personTwo = {
  name: "Safet",
  age: 20,
};

const { name: firstName, age, favouriteFood = "rice" } = personOne;

//console.log(haha); //undefined
console.log(age); // 24 --> mora biti originalni key
console.log(name); // prazno
console.log(firstName); //Anes
console.log(favouriteFood); //cevapi   --> sta je u objektu, to je bitno

const { name: firstNamew, ...rest } = personOne;

console.log(rest); //{age: 24, favouriteFood: "cevapi"}
console.log(firstName); //Anes
//-------------------------------------------

//*************************************************** */
//Object Destructuring

const osoba1 = {
  ime: "Ilija",
  prezime: "Grahovac",
  address: {
    city: "Kiseljak",
    street: "Duhri",
  },
};

console.log(osoba1.address.city); //Kislejak
const {
  ime,
  prezime,
  address: { street },
} = osoba1;

console.log(street); //Duhri
console.log(prezime); //Grahovac

//*************************************************** */
// Combining Two objects in One
//cija je zadnja, njegova se pika
//ne radi spread ... isto za array i objekat. U arrayu sve spoji u 1
//u objektu ovaj zadnji overrid-a onaj prvi.

const ormar1 = {
  boja: "crna",
  velicina: 5,
  dizajn: "modern",
};

const ormar2 = {
  boja: "siva",
  velicina: 4,
};

const newObj = { ...ormar1, ...ormar2 }; //{boja: "siva", velicina: 4, dizajn: "modern"}
console.log(newObj);

//ormar2 je overridao ormar1. Ali je iz ormar1  dizajn dodan jer ga nije bilo u ormar 2.
//Oni podaci koji su bili zajenicki, su overridani od strane zadnjeg

//*************************************************** */

//*********************************************** */
//Object destructuring in function

const igrac1 = {
  name: "Safet",
  age: 56,
};

const printUser = (user) => {
  console.log(`My name is: ${user.name}, and my age is ${user.age}`);
};

printUser(igrac1);

/************************************************* */

/******************************************* */
const igrac2 = {
  name: "Edin",
  age: 32,
  favouriteFood: "cevapi",
};

const printUser2 = ({ name, age, favouriteFood = "rice" }) => {
  console.log(
    `Our best player is: ${name} and he is ${age} old. Favourite food: ${favouriteFood}`
  );
};

printUser2(igrac2); //Our best player is: Edin and he is 32 old. Favourite food: cevapi. Zadnje se pika

/******************************************* */
