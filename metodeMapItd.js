//metode map i array ne diraju stari nego vracaju novi array

//metoda reduce vraca samo broj
//nagodna za sabiranje svih clanova arraya of objects
//magodna za dobivanje max broja iz arraya of objects

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((n) => n >= 0);

/************************************************* */
//puno vise koda nego sa mapom
let prazanArray = [];
for (let i = 0; i < filtered.length; i++) {
  prazanArray.push(filtered[i]);
}

//console.log(prazanArray);
/************************************************* */

/************************************************** */
//puno manje koda sa mapom
//napravili smo array of strings od brojeva
const items = filtered.map((n) => "<li>" + n + "</li>");

const html = items.join("");

//console.log(html);
/************************************************* */

/************************************************* */
const brojevi = [1, 4, 5, 7];
//map izgleda vrati array uvijek. A u tom arrayu moze biti objekat ili <li> ili nesto drugo

const items2 = brojevi.map((n) => {
  return { value: n };
});

//console.log(items2);
/************************************************/

/************************************************/
let array1 = [
  { id: 1, value: 4 },
  { id: 2, value: 1 },
  { id: -3, value: 4 },
  { id: 4, value: 7 },
];

let arrayCopy = _.cloneDeep(array1);

for (let i = 0; i < arrayCopy.length; i++) {
  arrayCopy[i].value = arrayCopy[i].value * 2;
}
array1 = arrayCopy;
console.log(array1);
console.log(arrayCopy);

/************************************************/

/********************************************** */
let officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

let prazanArray5 = [];

for (let i = 0; i < officers.length; i++) {
  prazanArray5.push(officers[i].id);
}

console.log(prazanArray5);
/*********************************************** */

/*********************************************** */
let prazanArray6 = officers.map((person) => person.id * 2);

console.log(prazanArray6);
/*********************************************** */

/*********************************************** */
var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: "",
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: null,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: undefined,
  },
];

/*
let eriR = pilots.map(pilot => pilot.years)
console.log(eriR.reduce((a, b) => a + b, 0));
*/

const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

console.log(totalYears);

/*********************************************** */

/*********************************************** */
//pronalazak pilota sa najvise godina iskustva

let pilotMaxYears = pilots.map((pilot) => pilot.years);
let maxValue = Math.max(...pilotMaxYears);
console.log(maxValue);
/*********************************************** */

/*********************************************** */
//pronalazak pilota sa najvise godina iskustva
//error handling odradjen na savrsen nacin
//ako posaljem prazan, null ili undefined, bit ce uklonjeni i nece se razmatrati

function isNumber(obj) {
  return obj !== undefined && typeof obj === "number" && !isNaN(obj);
}

function filterByID(pilot) {
  if (isNumber(pilot.years) && pilot.years !== 0) {
    return true;
  }
  return false;
}

let arrByYears = pilots.filter(filterByID); //ovdje imam savrseno ciste vrijednosti

var mostExpPilot = arrByYears.reduce(function (oldest, pilot) {
  return oldest.years > pilot.years ? oldest : pilot; //znak > jako bitan, okrenem ga kontra i trazi minimum
}, {}); //vrati mi citav objekat sa svim podacima od pilota

console.log(mostExpPilot);

/*
   * I named my accumulator oldest. My callback compares the accumulator to each pilot. If a pilot has more years of experience
   * than oldest, then that pilot becomes the new oldest so that’s the one I return.
     As you can see, using .reduce() is an easy way to generate a single value or object from an array.
   */
/*********************************************** */

/*********************************************** */
/*
 *Say we want two arrays now: one for rebel pilots, the other one for imperials. With .filter() it couldn’t be easier!
 */
var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  },
];

let rebelsArray = pilots.filter((pilot) => pilot.faction == "Rebels");
let EmpireArray = pilots.filter((pilot) => pilot.faction == "Empire");

//console.log(rebelsArray);
//console.log(EmpireArray);
/*********************************************** */

/************************************* */
//Our objective: get the total score of force users only. Let’s do it step by step!

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

let forceUsersArray = personnel.filter((pilot) => pilot.isForceUser);
console.log(
  forceUsersArray
); /****
  [
  0: {id: 5, name: "Luke Skywalker", pilotingScore: 98, shootingScore: 56, isForceUser: true}
  1: {id: 15, name: "Ezra Bridger", pilotingScore: 43, shootingScore: 67, isForceUser: true}
  2: {id: 11, name: "Caleb Dume", piloti...
  ]
     */
forceUsersArray[0].id = 152;
console.log(forceUsersArray);
console.log(personnel);

let scoresArray = forceUsersArray.map(
  (pilot) => pilot.pilotingScore + pilot.shootingScore
);

//console.log(scoresArray); //[154, 110, 156]

console.log(forceUsersArray);

var totalJediScore = scoresArray.reduce(function (acc, score) {
  return acc + score;
}, 0);

//console.log(totalJediScore);   //420

//Eh sav ovaj posao, da bih odradio koristio sam filter--> da dobijem true za: isForceUSer
//                                                map--> da saberem dva value unutar svakog objketa
//                                                reduce--> da saberem tri broja u arrayu koja nisu u objetima

//                          To je bilo bespotrebno. Sve smo mogli odraditi sa reduceom
const totalJediScore2 = personnel.reduce(
  (acc, person) =>
    person.isForceUser
      ? acc + person.pilotingScore + person.shootingScore
      : acc,
  0
);
console.log(totalJediScore2); //420

//******************************************************************************************************* */
//reduce
// by Max link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//reduce nam moze vratiti broj, array ili objekat. Mi mu to definisemo sta zelimo.
//reduce radi na immutable way za shallow(primitive) propertije
//koliko vidim reduce radi i za reference types na immutable way

//reduce

let total = [0, 1, 2, 3].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(total); //6

let initialValue = 0;
let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  initialValue
);
console.log(initialValue); // logs 6

let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattened); //[0, 1, 2, 3, 4, 5]  --> raspakovalo je array

/*Counting instances of values in an object*/
let names = [1, "Bob", "Tiff", "Bruce", 1];

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
console.log(countedNames);
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

//Grouping objects by a property
let people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property];
    console.log(obj); //{name: "Alice", age: 21}
    console.log(property); //age
    console.log(key); //21
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    console.log(acc);
    return acc; //{20: Array(1), 21: Array(1)}
  }, {});
}

let groupedPeople = groupBy(people, "age");
console.log(groupedPeople);
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }

//Bonding arrays contained in an array of objects using the spread operator and initialValue
// friends - an array of objects
// where object field "books" is a list of favorite books
let friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
let allbooks = friends.reduce(
  function (accumulator, currentValue) {
    console.log(currentValue); //{name: "Anna", books: Array(2), age: 21}
    return [...accumulator, ...currentValue.books]; //benefiti reduca i spread operatora
  },
  ["Alphabet"]
);

allbooks[0] = "Karina";
console.log(allbooks);
console.log(friends);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

//izbacivanje duplikata, radi i za numbers i za strings
let myArray = ["a", "b", 1, 1, "c", "e", "e", "c", "d", "d", "d", "d"];
let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    //-1 vraca ako ne postoji
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(myOrderedArray);

//Replace .filter().map() with .reduce()
//
const numbers7 = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers7.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    console.log(currentValue); //6                   //2
    console.log(accumulator); //[12]                 //[12, 4]
    accumulator.push(doubled);
  }
  return accumulator;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]
console.log(numbers7); //[-5, 6, 2, 0]

//reduce end
/*************************************************************/

//map

/*************************************************************/
//map radi na immutable way za primitive types u arrayu
//koliko vidim, mao radi na immutable way i za reference types u arrayu of objects +

//doubled vrijednosti arraya preko reduce-a
const array10 = [1, 4, 9, 16];

const arrayDoubled = array10.reduce((acc, currentValue) => {
  const doubled = currentValue * 2;
  acc.push(doubled);
  return acc;
}, []);

console.log(arrayDoubled);

//elegantnije rjesnej se cini map
const array11 = [1, 4, 5, 20];
const doubledArray11 = array11.map((br) => br * 2);
console.log(doubledArray11);

//vadjenje korijena iz svakog clana
const array12 = [2, 9, 16, 20];
const arrayRooted = array12.map((br) => Math.sqrt(br));
console.log(arrayRooted); //[1.4142135623730951, 3, 4, 4.47213595499958]
console.log(array12); //[2, 9, 16, 20]

const array13 = [{ value: 2 }, { value: 9 }, { value: 16 }, { value: 20 }]; //objekat mora biti key value pairs format
const arrayRooted2 = array13.map((br) => Math.sqrt(br.value));
console.log(arrayRooted2); //[1.4142135623730951, 3, 4, 4.47213595499958]
console.log(array13); //[2, 9, 16, 20]

//cilj nam je da svaki element u arrayu promjenimo da izgleda drugacije
const kvArray = [
  { key: 1, value: 10 },
  { key: 1, value: 20 },
  { key: 3, value: 30 },
];

const kvArray2 = kvArray.map((kv) => {
  let obj = {};
  obj[kv.key] = kv.value;
  return obj;
});

console.log(kvArray2);
//console.log(kvArray); //ostao isti - originalan
console.log(kvArray2);
/*[
0: {1: 10}
1: {2: 20}
2: {3: 30}
    ]
 */

//convertovanje stringa u brojeve pomocu map(Number)
const a = ["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]
console.log(a);

//convertovanje stringa u brojeve pomocu map(parseInt)
const b = ["1.1", "2.2e2", "3e300"].map((str) => parseInt(str)); // [1, 2, 3]
console.log(b);

/*************************************************************/

//filter

/*********************************************************** */
//filter

const words = ["back", "golgota", "lklkkllkkllkl"];
const manjeOd6 = words.filter((word) => word.length < 6);
console.log(manjeOd6); //["back"]

const numaralar = [4, 6, 9, 11];

const parniBrojevi = numaralar.filter((num) => num % 2 == 0);
console.log(parniBrojevi);

//filtriranje undefined values, nullova i ostalih isNumber() i ostale

/*********************************************************** */
