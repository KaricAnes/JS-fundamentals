let name;
//console.log(name);

//let if;       //ime varijable ne smije biti zauzeta rijec
//imena varijable moraju imati smisla: a, c, x1 nije dobro

//JS je caseSensitive

let name2, surname, ovo, ono;
//nije dobro sve u jedno redu da ih deklarisemo

const plata = 300;
//plata = 100;
//console.log(plata);
//ne mozemo konstantnu varijablu promjeniti
//ako zelimo da reassignamo, trebamo koristiti let

//Vrste tipova varijabli u JS:
// - Primitivni/Value types
// - Reference Types

//Primitive Types: String, Number, Boolean, undefined, null

//******************************************************* */
//eho ovdje sam shvatio razliku izmedju leta i vara.
//ako je let unutar {bloka} definisano, samo ga tu mozemo i koristiti.
//ako je let definisano iznad bloka, mozemo ga koristiti i u bloku.

let ime = 5;
let age = 24;
let isApproved = true;

if (isApproved) {
  ime = ime + 1;
  let data = ime + age;
  console.log(data);
}
//****************************************************************** */

//ovo radimo ako zelimo da nesto promjenimo poslije. Ovo sam cesto
//koristio u burgerBuilderu. Inicijalno null, kasnije bude nesto drugo.
let selectedColor = null;

let isSelected = true;

if (isSelected) {
  selectedColor = "red";
}

console.log(selectedColor);

//JS je dinamicki (dynamically typed) language
//to znaci da u runetime mozemo promjeniti tip podatka
//iz string literala u number literal ili obratno...

let num = "anes";

if (true) {
  //let num = 4;       //izbaci error ako ovaj gornji let izbrisem zbog Scope-a
  num = 5;
}
console.log(num); //typeof --> pomocu ovog vidimo tip podatka

//cocnsolu cistimo sa console + l (L)
