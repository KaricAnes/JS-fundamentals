let jsonIn = [
  { age: 45, name: "Anes" },
  { age: 40, name: "Sefir" },
  { age: 45, name: "Safet" },
];

for (let i = 0; i < jsonIn.length; i++) {
  console.log(jsonIn[i]["name"]);
  console.log(jsonIn[i]["age"]);
  console.log(jsonIn[i]);
}

/*let obj = {};
let arr = [];
for (let i = 0; i < jsonIn.length; i++) {
  obj = jsonIn[i];
  arr = Object.keys(obj);
}

console.log(arr);
*/
//filter. Napravi mi novi array od objekata u kojih je age: 45

jsonIn.forEach((person) => console.log(person)); //ispise oba objekta

jsonIn.forEach((person, index) => console.log(person, index)); //{age: 45, name: "Anes"} 0    ispise sve objekte i jos index

let filteredArray = jsonIn.filter((person) => person.age === 45);
console.log(filteredArray); //[{…}, {…}]

//every

let result = jsonIn.every((person) => person.age > 40); //false
console.log(result);

let foundedPerson = jsonIn.find((person) => person.age === 45);
console.log(foundedPerson); //samo jednu nadje. ne moze vise. Ako ti treba vise, onda filter koristi
