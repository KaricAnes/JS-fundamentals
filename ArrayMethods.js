const items = [
  { name: "bike", price: 400 },
  { name: "mobile", price: 700 },
  { name: "plazma", price: 800 },
  { name: "car", price: 7000 },
];

//1. filter. V

const filteredArray = items.filter((item) => {
  return item.price <= 700;
});
console.log(filteredArray); //[{…}, {…}]

//2. map

const itemNames = items.map((item) => {
  return item.name;
});
console.log(itemNames); //["bike", "mobile", "plazma", "car"]

//3. find  --> omogucava nam da pronadjemo single object u arrayu

const foundItem = items.find((item) => {
  return item.name === "bike";
});
console.log(foundItem); //{name: "bike", price: 400}
console.log(foundItem["name"]); //bike

//4. forEach --> ne returna nista. Slicna for loop-u

items.forEach((item) => {
  console.log(item.name); //bike    mobile   plazma    car   -> nije u arrayu, jer ne vraca nista forEach
});

//5. some --> vraca true ili false

const hasInexpensiveItems = items.some((item) => {
  return item.price <= 401; //vratit ce true ukoliko ima bar jedno tacno   true. Bolje bi bilo da se zove any
});

console.log(hasInexpensiveItems);

//6. every --> vraca true ili false

//provjerava da li svaki element u arrayu zadovoljava kriterijum

const allInexpensiveItems = items.every((item) => {
  return item.price > 100;
});
console.log(allInexpensiveItems); //true

//--------------------------------------------------------------------------
//6. reduce je drugacija, ona radi racunanje na svim elementima arraya

const total = items.reduce((curTotal, item) => {
  return item.price + curTotal;
}, 0);
console.log(total); //8900

//bez reduce-a puno vise posla ima
let total2 = 0;
let currentValue;
for (let i = 0; i < items.length; i++) {
  currentValue = items[i].price;
  console.log(typeof currentValue);

  total2 = total2 + currentValue;
}
console.log(total2); //8900
//--------------------------------------------------------------------------

//--------------------------------------------------------------------------
// Hanijeva Ideja o objektima u memoriji

const obj1 = {
  name: "Anes",
};

obj1.name = "Safet";
console.log(obj1); //niej error

/*obj1 = {
  age: 45,
}; //Assignment to constant variable.*/

/*const a = 5;
a = 4;                     //error 
*/
//--------------------------------------------------------------------------

//-------------------------------
//7. include

const arrayOfPrices = items.map((item) => {
  return item.price;
});

console.log(arrayOfPrices); //[400, 700, 800, 7000]

const includes400 = arrayOfPrices.includes(400);
console.log(includes400); //true

/****************************************** */
