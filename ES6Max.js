//let vs const

//Kaze MAx da se vecinom koristi cost. let se treba korstiti samo kada smo sigurni da ce se nesto mijenjati u varijabli.

//arrow functions --> bolja sintaksa za pisanje JS funkcija

//krace su od obicnih funkcija
//u njima se this ponasa ocekivano. Rjesava sve nase probleme sathis-om.

//primjer arrow funkcije sa jednim parametrom
const printMyName = (name) => {
  console.log(name);
};
printMyName("Anes");

//primjer arrow funkcije bez parametara
const printMyName2 = () => {
  console.log("Anes2");
};
printMyName();

//primjer arrow funkcije sa vise parametara
const printMyNum = (a, b) => a * b;
console.log(printMyNum(1, 2));

//exports imports
//exporti i importi nam dozvoljavaju da radimo sa modularnim kodom
//da imamo nas JS kod razvrstan u vise fajlova

//imamo name exporte i default exporte
//name exporti => kada samo odrdjenu stvar importamo iz nekog fajla

//default export--> kada importamo sve iz nekog fajla

// --> actionCreators
//import * as actionCreators from '../../store/actions/index';

//ovo ispod je name import, jer znamo tacno sta importujemo. Kada je u zagradi{} onda je named import.
//import  { connect } from 'react-redux';
//import {smth as Smth} from './utility.js'

//ovo ispod je default export, tacnije njegova posljedica. Moglo je pisati bilo sta umjesto CounterOutput ili Ker
//import CounterOutput from '../../components/CounterOutput/CounterOutput';
//import Ker from '../../components/CounterOutput/CounterOutput';

//classes
//u klasnim komponentama nam treba this keyword

//Spread & Rest Operators

//Rest Operator
const filter = (...args) => {
  //lud nacin, ali se malo korsiti. Mislim da sam ga negdje koristio za ...props
  return args.filter((el) => el === 1);
};
console.log(filter(1, 5, 1, 4));

//Destructuring

//Array Destructuring
[a, b] = ["Hello", "Max"];
console.log(a); //Hello --> ako nam treba neka varijabla po imenu iz arraya

const numbers = [1, 2, 3, 4, 5];
[num1, num2] = numbers;
console.log(num1, num2); //1, 2       van arraya
[, , num3] = numbers;
console.log(num3); //3

//Object Destructuring
/*{name} = {name: 'Max', age:28}; 
console.log(name);*/

//Reference and Primitive Types
//Mislim da sam ovo shbvatio do sada, ali eto

//Primitive Types ---> Strings, numbers
a = 4;
b = a;

console.log(a == b);
b = 100;
console.log(a == b); //nisam referencirao na onaj gornji. Promjneio sam klon, a ne jedan te isti

a = 1;
b = 1;
console.log(a == b); //True

//Reference Types   --> Objects, arrays
const person = {
  name: "Anes",
};
const personCopy = person;
personCopy.name = "Ilija";
console.log(personCopy == person);

const predmeti = {
  predmet: "stol",
};

const predmeti2 = {
  predmet: "stol",
};

console.log(predmeti == predmeti2); //false, o ovome mi je Hani pricao

//Refreshing Array Functions
//filter sort map

//we want each number doubled
const brojs = [1, 2, 3];

const brojsDoubled = brojs.map((broj) => broj * 2);
console.log(brojsDoubled); //[2, 4, 6]
