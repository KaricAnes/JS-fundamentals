let person1 = {
  name: "Anes",
  surname: "Karic",
};

/*person2 = Object.assign(person1);
person2.name = "Fetah";
console.log(person2);
*/

person2 = {};

Object.assign(person2, person1);
/*person2.name = 'Fetah';
console.log(person2);*/

console.log(person1 === person2);

let info1 = {
  name: "Anes",
  surname: "Karic",
};

let info2 = {
  height: 173,
  weight: 65,
};

info = {};
Object.assign(info, info2, info1); //u ovaj prvi ce biti uvezena ova 2 preostala na immutable way
console.log(info);

//Ovo je jako bitnooooooooooooooo

let mergingFunc1 = (iemPrez, viTez) => {
  return Object.assign({}, iemPrez, viTez);
};

let mergedObj1 = mergingFunc1(info1, info2);
console.log(info1);
console.log(mergedObj1);

//ovako ispod ne treba raditi. Sjebali smo info 1
/*let mergingFunction = (imePrez, viTez) => {
  return Object.assign(imePrez, viTez);
};

mergedObj2 = mergingFunction(info1, info2);
console.log(mergedObj2);
console.log(info1); // injega je sjebalo
*/

let mergingSpredFunc = (info1, info2) => {
  //najbolji nacin je ovaj ispod za spajanje u jedan obj.
  let mergedObj = { ...info1, ...info2 };
  return mergedObj;
};

console.log(mergingSpredFunc(info1, info2));
console.log(info1);
console.log(info2);

console.log(6 == "6");
