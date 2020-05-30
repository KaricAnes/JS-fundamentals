/**
Write a function that takes a object and a string, which represents an object lookup path, for example
"property1.property2". The function should return the value on the specific path. Take care of error handling.
Example:
const lookup = (obj, path) => {....}
const object = { property1: { property2: "Apple", property3: 'Orange' } };
const path = 'property1.property2'
console.log(lookup(object, path));
 */

 //kljucno pitanje na googlu --> string to path
 //https://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference/6394168
 /*
 const lookup = (obj, path) => {
     let result;
     if(path!== ''){
    const assplitted = path.split('.'); //["klkl", "kkjkk"]
     result = assplitted.reduce((o,i)=>o[i], obj);
     if(result !== undefined){
        result=result;
    }else{
        result = 'Enter sth valid';
    }
     }
     else{
        result = 'You did not enter anything';
     }
  return result;
     };
*/
     /*
     const lookup2 = (obj,path)=> {
        objectPath.get(obj, "a.c.1");
     }
     */


    const object = { property1: { property2: "Apple", property3:{5:'Orange' } } };
 /*const path = 'property1.property2/a';

 console.log(object.property1.property3);
 console.log(lookup(object, path));*/
 
 const lookup2 = (obj, path) => {
     let assplitted, value;

     if(path == "")
     {
         value = 'Nemojte unositi prazan put';
     }
     else if(typeof path == "number"){
        value = 'Nemojte unositi broj';
     }
      
     else {
         assplitted = path.split('.');
         value = obj[assplitted[0]];
         for(let i = 1; i < assplitted.length ; i++) {
            value = value[assplitted[i]];
          }
     }

     if(value == undefined){
        value = 'Greska u tipkanju, unesite pravi put';
     }
              
  return value;
     };

const path2 = "";
//console.log(object[property1]);
console.log(lookup2(object,path2));













//program za racunanje exponencijalnog rasta/ili linearnog +2 .npr

const expon = (n) => {
let arrayExp = [];
let value = n;
arrayExp.push(value);

    for(let i = 0; i<55;i++){
        arrayExp.push(arrayExp[i]+3);
        //console.log(arrayExp);
         }
         if(arrayExp[0] !== undefined && arrayExp[0] !== NaN){
             arrayExp = arrayExp
         }
         else{
             console.log('problem');
         }
return arrayExp;
}
//console.log(expon());


