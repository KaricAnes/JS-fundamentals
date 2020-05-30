//Global vs Local Scope
//Kaze Mosh da trebamo izbjegavati Global Scope. To je kao cetkica za zube svima dostupna.

/****************************** */
//Ovo ispod nece raditi
//var ---> global      let i const --> local
{
  const message = "hi";
}
//console.log(message);
/****************************** */

/****************************** */
//Global Scope
//ovo ispod ce raditi jer je let izvan bloka. Moze se koristiti i u bloku
let number = 6; //ovaj number ima global scope. To znaci da je svugdje dostupna.

if (number > 5) {
  //  console.log(number);        //ovo ce raditi jer je iznad bloka definsiano
} //izbacit ce gresku da i nije definisano
/****************************** */

/****************************** */
//u for petlji [i] nikada ne moze biti const. Jer je [i] ovdje primitive i spasava se po value-u u memoriji. I ne smije biti const jer se mijenja.

/*console.log(i);

for(let i = 0; i<3; i++){ //i je dostupno samo u bloku ispod i nigdje vise 
    console.log('Anes');
}
console.log(i);*/ /****************************** */

/****************************** */
function start() {
  const message = "hi";

  if (true) {
    const another = "bye";
  }
  //console.log(another); error --> another je dostupna samo u gornjem bloku
  //console.log(message); //message je dostupna i dole
}
//console.log(message);   message je dostupna samo unutar funkcije

start();
/****************************** */

/****************************** */
//imamo dvije konstante sa istim imenom u dvije razlicite funkcije. To je sasvim ok.

function proba() {
  const message = "hey";
}

function roki() {
  const message = "hey";
}
/****************************** */

/****************************** */
const color = "red";

if (true) {
  const color = "blue";
  //console.log(color);           //ispisat ce nam blue --> jer lokalno ima prednost
}
/****************************** */
