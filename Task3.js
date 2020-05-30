/*
For a random array of structs of type { id, value }, return a new struct, with a unique id and a value
such as the next positive integer, which isn't present in the existing structure list and with at least one
smaller integer appearing at least twice in the same list.
For example:
a = [{id:1, value:3}, {id:2, value:7}, {id:3, value:3}, {id:4, value:1}, {id:5, value:4}]
value: 1 - appears 1 time
value 3 - appears 2 times
value 4 - appear 1 time
value 7 - appears 1 time
Solution: {id: 6, value: 5}
*/

const uniqueStruct = (arr) => {
  const ids = [],
    values = [],
    uniqueStruct = {},
    counts = {};
  let randomId,
    idMax,
    value = 0,
    uniqueValue,
    num;

  arr.map((struct) => {
    ids.push(struct.id); //[1, 2, 3, 4, 5]
    values.push(struct.value); //[3, 7, 3, 1, 4]
  });
  idMax = Math.max(...ids);

  //randomId = Math.floor(Math.random()*idMax+10);
  let id = Math.max(...ids) + 1;

  //moglo se i ovo preko while-a uraditi --> ovo ispod je potpuno neispravno
  //   for (let i = 0; i < ids.length; i++){
  //     if(ids[i] === randomId){
  //        randomId = Math.floor(Math.random()*idMax);
  //     }
  //     else{
  //        uniqueStruct.id = randomId;
  //     }
  // }
  uniqueStruct.id = id;
  for (let i = 0; i < values.length; i++) {
    num = values[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  console.log(counts); //{1: 1, 3: 2, 4: 1, 7: 1}

  let ponavljacice = [];
  let minPonavljacica;
  for (let key in counts) {
    if (counts[key] >= 2) {
      ponavljacice.push(key);
      minPonavljacica = Math.min(...ponavljacice);
      //console.log(minPonavljacica); 1

      uniqueValue = minPonavljacica;
    }
  }

  while (values.indexOf(uniqueValue) !== -1) {
    //sve dok postoji uniqueValue u values ==>
    uniqueValue = uniqueValue + 1;
  }

  uniqueStruct.value = +uniqueValue;
  return uniqueStruct;
};

const randomArray = [
  { id: 1, value: 1 },
  { id: 2, value: 5 },
  { id: 3, value: 1 },
  { id: 4, value: 1 },
  { id: 5, value: 2 },
];
console.log(uniqueStruct(randomArray));
