let person = {
  name: "Anes",
  surname: "Karic",
};

console.log(person["name"]); //bolje je korsititi ovaj nacin, kaze Profa
console.log(person.name);

let propertyName = "name";

console.log(person.propertyName); //undefined
console.log(person[propertyName]); //Anes                znaci od sada uvijek person[]

for (let propertyName in person) {
  console.log(person[propertyName]); //Anes        Karic
}

let a = Object.values(person);
console.log(a); //["Anes", "Karic"]

for (let propertyName in person) {
  console.log(propertyName + ": " + person[propertyName]); //name: Anes         surname: Karic
}

let PersonName = "Anes Karic";

let splitFunction = (fullName) => {
  let splittedArray = fullName.split(" ");
  console.log(splittedArray);
  let obj = {
    ime: splittedArray[0],
    prezime: splittedArray[1],
  };
  return obj;
};

console.log(splitFunction(PersonName));
