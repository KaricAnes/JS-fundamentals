//JS objects are mutable, i to nam ponekad moze stvoriti neocekivane probleme

/*
Lodash comes with two different functions that allow you to do shallow copies and deep copies. These are clone and clonedeep .
 The great thing about Lodash is that you can import each function individually, without requiring the entire library into your project.
This can wildly reduce the size of your dependencies.
*/

const obj = {
  number: 10,
};

const obj1 = obj;

obj1.number = 11;

//console.log(obj == obj1);       TRUE

//promjenio mi je i i obj1 i obj
//iako sam ja htio da promjenim samo obj1, on mi je promejnio i obj
//promjene se reflektuju i na jedan i na drugi objekat
/**************************************************************************** */

/*********************************** */
//na ovaj nacin sam izbjegao mutability, i odradio to na immutable way

const vrijednost = {
  number: 9,
};

const value = { ...vrijednost };

vrijednost.number = 10;

//console.log(vrijednost == value);                   FALSE
/*********************************** */

/********************************************/
//Ovo je sav smisao immutability-a i dokaz u kakve probleme nas on moze uvaliti
//kad god nesto promjenimo, to se odnosi na isti objekat. Gubimo originalni zauvijek.
//Necemo dobiti error u konzili, ali necemo dobiti ni pravi rezultat koji ocekujemo
//no solution, just problem --> spread operator
//rijesen problem  --< alternativa mu je object.assign()

/*let newObj = {
    total: 65,
    increment: 1
};

const incrementTotal = function(objekat, val) {
     let obj = {...objekat};
       obj.increment = val; 
   return function() {
       console.log(obj.total);
       obj.total = obj.total + obj.increment; 
       console.log(obj.total);

   };
};


const incBy1 = incrementTotal(newObj, 1);
const incBy2 = incrementTotal(newObj, 2);

console.log(incBy1());
console.log(incBy2());*/

/*********************************** */

/***************************************************** */
/*let newObj = {
    vrijednosti: {
    total: 65,
    increment: 1
    }
};

const incrementTotal = function(objekat, val) {
     let prviSloj = {...objekat};
     let vri = prviSloj.vrijednosti;
     console.log(vri);
     console.log(prviSloj);
     let drugisloj = {...prviSloj[vri]};
     console.log(drugisloj.increment);

     drugisloj.increment = val; 
   return function() {
       console.log(drugisloj.total);
       drugisloj.total = drugisloj.total + drugisloj.increment; 
       console.log(drugisloj.total);

   };
};


const incBy1 = incrementTotal(newObj, 1);
const incBy2 = incrementTotal(newObj, 2);

console.log(incBy1());
console.log(incBy2());*/
/***************************************************** */

let objekt = {
  values: {
    plata: 800,
    bonus: 100,
  },
};

const objectsArray = [];

for (let key in objekt) {
  //key je street, name, mail...
  objectsArray.push({
    //novi objekat cemo pushati, ne stari
    id: key,
    //elementConfig: key.elementConfig,
    values: objekt[key],
  });
}

console.log(objectsArray);

const total = (objekt) => {
  obj2 = { ...objekt };
  obj2Deeper = { ...obj2[objekt] };
  // console.log(obj2Deeper);
};

//console.log(total(objekt));

/*
Lodash comes with two different functions that allow you to do shallow copies and deep copies. These are clone and clonedeep .
 The great thing about Lodash is that you can import each function individually, without requiring the entire library into your project.
This can wildly reduce the size of your dependencies.
*/

/*Moramo znati kako  da importujemo loadash u JS projekat:

Linkovi: cdnjs.com/libraries/lodash.js

Taj link puknemo u index.html u script tag

*/

/******************************************************** */
//shallow kloniranje preko lodasha

let objekatt = {
  ime: "anes",
};

let kopijaObjekta = _.clone(objekatt);

kopijaObjekta.ime = "safet";

//console.log(kopijaObjekta);
//console.log(objekatt);
/******************************************************** */

/******************************************************** */
//potreba za deepCopijem
let array1 = [{ ime: "Rasim" }];
let arrayCopy = _.clone(array1);

//console.log(array1 == arrayCopy);           //False
//console.log(array1[0] == arrayCopy[0]);     //True
/******************************************************** */

/*******************************************/
//potreba za deepCopijem
let array2 = [{ ime: "Rasim" }];
let arrayCopy2 = _.cloneDeep(array2);

//console.log(array2 == arrayCopy2);           //False
//console.log(array2[0] == arrayCopy2[0]);     //True
/*******************************************/

/************************************ */
dubokiObjekat = {
  Anes: {
    plata: 600,
    sposobnosti: {
      ima: true,
    },
  },
  Rejahana: {
    plata: 200,
    sposobnosti: {
      ima: true,
    },
  },
};

let prazanArray = [];
prazanArray.push(dubokiObjekat);

let prazanArrayCopy = _.cloneDeep(prazanArray);

if (
  prazanArray[dubokiObjekat.Anes.sposobnosti.ima] ==
  prazanArrayCopy[dubokiObjekat.Anes.sposobnosti.ima]
) {
  console.log("Ne radi");
} else {
  console.log("radi");
}

/*dubokiObjekatCopy = _.cloneDeep(dubokiObjekat);

dubokiObjekatCopy.Anes.sposobnosti.ima = false;

console.log(dubokiObjekatCopy.Anes.sposobnosti.ima);
console.log(dubokiObjekat.Anes.sposobnosti.ima);*/

//console.log(dubokiObjekat.Anes.sposobnosti.ima == dubokiObjekatCopy.Anes.sposobnosti.ima );

/************************************ */
