const name = "Anes";
const age = 25;
//puno je preglednije i ljepse kada stavimo u objekat

const person = {
  name: "Soki",
  age: 24,
  ime: "Soki",
};

//dot notation
person.name = "aki"; //mozemo na ovaj nacin da mijenjamo objekat ili mu pristupimo

//bracket notation
//person['name'] = 'Anes';   //mozemo i na ovaj, ali ovaj iznad se vise koristi koliko vidim

const selection = "name";
person[selection] = "Mary"; //Eh ovo me jako zbunjivalo u onom mom zadatku, a tako je jednostavno
console.log(person);

//arraj je objekat u JS

let testArray = [];

testArray.push(person);

//console.log(testArray);

let selectedColors = ["red", "blue"];
selectedColors[2] = "red";
selectedColors[0] = "purple";

//console.log(selectedColors[3]); //vrati undefiend ako pokusamo pristupiti clanu arraya koji ne postoji

for (let i = 0; i < selectedColors.length; i++) {
  //ovaj length je jako bitan
  if (selectedColors[i] == "red") {
    // console.log(selectedColors[i] + ' su picke')
  }
}

//console.log(selectedColors);

let slectedPredmeti = [
  { boja: "red", oblik: "kvadrat" },
  { boja: "yellow", oblik: "okrugao" },
];

/*const predmeti = slectedPredmeti.map(predmet => {
  console.log(predmet.boja);
   
})

console.log(predmeti);*/

for (let i = 0; i < slectedPredmeti.length; i++) {
  if (slectedPredmeti[i].oblik == "kvadrat") {
    //evo kako pristupiti neko propertiju objekta koji se nalazi u arrayu
    slectedPredmeti[i].boja = "blue";
  }
}

console.log(slectedPredmeti);

//Malo vjezbe nece skoditi
let testBrojeviArray = [
  { id: "1", value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
];

for (let i = 0; i < testBrojeviArray.length - 1; i++) {
  if (testBrojeviArray[i].value < testBrojeviArray[i + 1].value) {
    testBrojeviArray[i].value = testBrojeviArray[i].value + 10;
  }
}

console.log(testBrojeviArray);

const osoba = {
  name: "Anes",
  surname: "Karic",
};

osoba.name = "Fikret";

const targetMember = "name";
osoba[targetMember] = "John";

console.log(osoba);
