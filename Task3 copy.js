const newStructFunc = (arrOfValIds) => {
  let arrayOfValuesAndIdsCopy = [...arrOfValIds];
  let arrOfIds = [],
    arrayOfValues = [];

  arrayOfValuesAndIdsCopy.map((singleStruct) => {
    arrOfIds.push(singleStruct.id); // singleStruct.id; //[1, 2, 3, 4, 5]
    arrayOfValues.push(singleStruct.value); //[3, 7, 3, 1, 4]
  });

  /*arrayOfValues = arrayOfValuesAndIdsCopy.map((singleStruct) => {
    return singleStruct.value; //[3, 7, 3, 1, 4]
  });*/

  const newId = Math.max(...arrOfIds) + 1;
  let sorted_arr = arrayOfValues.slice().sort(); //[1, 3, 3, 4, 7]

  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  if (results.length === 0) {
    return "You need to have some repeating values in array of objects";
  }

  let newValue = Math.min(...results);
  while (arrayOfValues.includes(newValue)) {
    //while (newValue in arrayOfValues) {
    newValue++;
  }
  let newStruct = { id: newId, value: newValue };
  return newStruct;
};

const arrayOfValuesAndIds = [
  { id: 1, value: 3 },
  { id: 2, value: 3 },
  { id: 3, value: 8 },
  { id: 4, value: 5 },
  { id: 100, value: 6 },
];

console.log(newStructFunc(arrayOfValuesAndIds));
