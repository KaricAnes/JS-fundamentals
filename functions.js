//Performing a task
function greet(ime, prezime) {
  //ime je parametar
  console.log("Moje ime je" + ime + ", " + "a prezime mi je: " + [prezime]);
}

greet(" Anes", "Karic"); //Anes je argument

//Calculating a value

function square(number) {
  let squareNum = number * number;
  return squareNum;
}

function displaySquare() {
  console.log(square(5));
}

displaySquare();

let number = square(8);
console.log(number);
//square(5);

console.log(square(6));

function sendMessage(sati) {
  let hours = sati;
  let message;
  if (hours >= 6 && hours <= 12) {
    message = "Goog Morning";
  } else if (hours > 12 && hours <= 18) {
    message = "Good Afternoon";
  } else {
    message = "Good Eveneing";
  }

  return message;
}

console.log(sendMessage(04));

function checkOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 > 0) {
      console.log(arr[i]);
    }
  }
}
let arrayTest = [1, 2, 3, 4, 5];
console.log(checkOdd(arrayTest));

//arrow functions

/******************* */
//arrow function with 1 parameter
const squere5 = (number) => number * 2; //ako nemamo nikako parametara, onda moramo imati prazne zagrade()

console.log(squere5(4));
/******************* */

/******************* */
//arrow function with two parameters
const squere6 = (num1, num2) => num1 * num2; //ako nemamo nikako parametara, onda moramo imati prazne zagrade()

console.log(squere6(4, 4));
/********************* */

/***********************************/
//vracanje samo aktivnih job-sa pomocu mapa
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const emptyJobs = [];

jobs.map((job) => {
  if (job.isActive) {
    emptyJobs.push(job);
  }
});

console.log(emptyJobs);

/*
[
0: {id: 1, isActive: true}
1: {id: 2, isActive: true} 
]
 */
/***********************************/

/********************************************* */
//vracanje samo neaktivnih jobova pomocu filtera --> ovo je puno bolje od mapa

const emptyJobs2 = jobs.filter((job) => !job.isActive);

console.log(emptyJobs2);
/********************************************* */

/********************************************* */
//template literals
const colors = ["blue", "red", "green"];

const colorsList = colors.map((color) => `<l> ${color} </li>`); //ovdje sam koristio ove template literale

console.log(colorsList);

/**
 * [
0: "<l>  blue  </li>"
1: "<l>  red  </li>"
2: "<l>  green  </li>"
    ]
 */

const address = {
  street: "",
  city: "",
  country: "",
};

const values = Object.values(address);
console.log(values); //["", "", ""]
/********************************************* */

/********************************************* */
//concat
const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [7, 8, 9];

const togetherFS = second.concat(first, third); //kada ih imamo vise, samo ih ubacujemo u zagradu.

console.log(togetherFS); //[4, 5, 6, 1, 2, 3, 7, 8, 9]
//return updateObject(state, {results: state.results.concat({ id: new Date(), value: action.result*2 })});
/********************************************* */

/********************************************* */
//Provjera da li je concat vratio novi array ili je samo referirao na stari. Vratio je novi.
togetherFS[0] = "klix";
console.log(togetherFS);
console.log(second);
/********************************************* */

/********************************************* */
//Provjera da li nakon concat-anja dobijemo klonirani arrar za refernce types
//Ne dobijemo, moramo sami da radimo na immutabilty-ju
//Ako radimo sa reference types u arrayu nastalom od concata, moramo ici na deepCopy

const namjestaj = [{ stolica: "crna" }, { stol: "bijeli" }];

const oprema = [{ laptop: "Asus" }, { tv: "Sony" }];

const oprema2 = _.cloneDeep(oprema);

const mix = namjestaj.concat(oprema2);
console.log(mix);
/*
[
0: {stolica: "crna"}
1: {stol: "bijeli"}
2: {laptop: "Asus"}
3: {tv: "Sony"}
]
*/
/*
for(let i =0; i<mix.length; i++){
  if(mix[i].stolica = 'crna'){
    mix[i].stolica = 'kurcina';
  }
  else{
     mix[i];
  }
}
*/

mix[2].laptop = "kurcina";
console.log(oprema);
console.log(mix);
/********************************************* */

/********************************************* */
//provjera concat immutabilty-ja na shallow-value types
//radi fino, bez mutiranja originala
//dakle problem je samo sa reference types

const apples = [1, 2, 3];
const fruits = [4, 5, 6];

const jo = apples.concat(fruits);

jo[0] = "anes";
console.log(apples);
console.log(apples);

/********************************************* */

/**************************************** */
//alternativa za concat moze biti spread operator
//na ovaj nacin mozemo dodati i nesto vise u nas array. Imamo dakle vecu kontrolu.

const combined = [...apples, "a", ...fruits];

console.log(combined);

/**************************************** */

/**************************************** */
const bingo = [1, 2, 3, 4, 5];

let maxValue = Math.max(...bingo); //ne radi bez spread operatora
console.log(maxValue);

let minValue = Math.min(bingo); //Ni min nece da radi logicno bez spreada
console.log(minValue);

/**************************************** */

/**************************************** */
//ovo ispod ne valja
const ime = { name: "Mosh" };
const proba = ime;

proba.name = "a";
console.log(ime);

/**************************************** */

/***************************************** */
//ovo ispod  valja, immutability za objekte
const ime2 = { name: "Mosh" };
const proba2 = { ...ime2 };

proba2.name = "a";
console.log(ime2);
/*************************************** */
