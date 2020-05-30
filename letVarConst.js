//var --> function scoped, dostupna u citavoj funkciji, pravi probleme. Var nista. Zdravo

//ES6 --> let, const --> block scoped 

//kada definisemo varijablu kao const, ne mozemo je reassignati

//max preporucuje da uvijek koristimo const. A let samo onda kada varijablu moramo reassignati.
/******************************** */
//let vs var
function rok() {
    for (var i = 0; i < 5; i++){  //trebali smo let ovdje koristiti
        console.log(i);
    }
    console.log(i);       //ovo je dostupno ovdje zbog vara i pravi probleme. Treba da jes dostupno samo u odredjenom bloku. 
        
};
rok();
/******************************** */


/******************************** */
const a =5;
const b = 5;

//console.log(a==b); //true
/******************************** */


/******************************** */
const objekat = {
broj:5
}

const objekat2 = {
    broj:5      
}

//console.log(objekat == objekat2);  //false
//console.log(objekat.broj == objekat2.broj);  //true  poredimo primitive values

objekat.broj = 4;
console.log(objekat2);
/******************************** */


//u for petlji [i] nikada ne moze biti const. Jer je [i] ovdje primitive i spasava se po value-u u memoriji. I ne smije biti const jer se mijenja.


for(let i = 0; i<3; i++){ //i ne smije biti const u for petlji 
    //console.log('Anes');
}


