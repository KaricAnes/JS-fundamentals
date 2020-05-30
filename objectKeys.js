//Object,keys()
//samo ime govori, daje nam kljuceve od objekta

const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1)); //["a", "b", "c"]

const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); //["0", "1", "2"]

const obj = { 0: "a", 1: "b", 2: 5 };
console.log(Object.keys(obj)); //["0", "1", "2"]

let user = {
  name: "John",
  age: 30,
};

console.log(Object.keys(user)); //["name", "age"]

console.log(Object.values(user)); //["John", 30]

console.log(Object.entries(user)); //[ ["name","John"], ["age",30] ]

obj5 = [{ a: 5 }, { b: 6 }];

const values = obj5.map((obj) => Object.values(obj));
console.log(values); //[Array(1), Array(1)] [[5], [6]]

/*******************************************/

const values2 = Object.values(obj5);
console.log(values2); //vrati isto sam mu i prolsijedio obj5 = [{a:5}, {b:6}];

let prazArr = [];
const values3 = values.map((arr) => prazArr.push(arr[0]));

console.log(prazArr);
/*********************************************/
