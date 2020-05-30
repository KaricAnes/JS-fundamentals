//Kada pricamo o function Scope-u, govorimo o varijablama koje su dostupne ili nisu u funkcijama
//Lifetime of this variables

//ovo sa scopom u JS je isto kad je neko zarobljen pa ne moze da izadje iz ropstva
//kad je gore iznad slobodan, moze da ide gdje god pozeli. Kad je zarobljen, samo kod onih koji su sa njim u logoru.

const startCar = (carId) => {
  let message = "Starting...";
};

startCar(123);
//console.log(message); //error message is not defined

const startCar2 = (carId) => {
  let message = "Starting...";
  let startMotorbike = () => {
    console.log(message);
  };
  startMotorbike(); //bez ovog nista se ne desava
};

startCar2(1); //nista, nece se ni pozvati ova unutarnja funkcija

//startMotorbike();  //error

const startCar3 = (carId) => {
  let message = "Anes";
  let startMotorbike = () => {
    let message = "override"; //bez leta bi pisalo override
  };
  startMotorbike();
  console.log(message);
};

startCar3(); //Anes ispisat ce Anesa, on je globalniji. Isto kao ljudi, ko je poznatiji njega se slusa.

//Block Scope ----------------------------------------------------------

if (5 === 5) {
  let message = "Equal";
}

//console.log(message); //error message is not defined

let message = "outside";

if (5 === 5) {
  let message = "Equal";
  console.log(message); //Equal
}

console.log(message); //outside, da nije bilo leta u if-u, bilo bi eqaul

//arrow functions ------------------------------------------------------------------

let getId = (prefix, suffix) => {
  return prefix + 123 + suffix;
};

console.log(getId("ID: ", "!")); //ID: 123!

//default parameters

let trackCar = (carId, city = "NY") => {
  //ovo 'NY' je samo default parameter. Ako ne proslijedim nista drugo, on ce se uvaziti.
  console.log(`Tracking ${carId} in ${city}`);
};

trackCar(123); //Tracking 123 in NY

trackCar(123, "Chickago"); //Tracking 123 in Chickago. Ova sto je poslata je overirdala onu lokalnu gore.


