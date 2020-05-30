//referenceTypes --> object, function, array

let x = 10;
let y = x;

x = 20;

//rezultat ovoga je: x: 20  y: 10

//Iako smo poslije promjenili x, y se nije updajtovao
//primitiveTypes se sejvaju po value-u u memoriji
/***************************************************************************************** */

/********************************************************************** */
//Sada cemo istu stvar da pokusamo sa refrenceType

let b = { value: 10 };
let c = b;

b = 20; //ovako se nista nece promjenti sto se tice logike

/********************************************************************** */

let f = { value: 10 };
let g = f;

f.value = 5; //eh sada vidimo sta su referenceTypes
// kada sam promejnio f, i g se updajtovao
//objekti se sejvaju po referenci u memoriji
/********************************************************************** */

/********************************************************** */
let number = 10;

function increase(number) {
  number + 1;
}

increase(number);
//console.log(number);

//rezultat ce biti 10. KAd ispisemo u konzoli number, on nam vraca let number. Ne vraca nam dakle ovaj iz func bloka.
/********************************************************** */

/********************************************************** */
let broj = { value: 10 };

function increase(broj) {
  broj.value++;
}

increase(broj);
console.log(broj);

//rezultat ce biti 11.
/********************************************************** */
