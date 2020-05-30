let database = {
  foo: {
    bar: {},
  },
};

//changed assignment to argument, since this will fail with invalid left hand assignment.
deepValue(database, "foo/bar/hello", "world");

function deepValue(dbase, stringValue, val) {
  var obj = dbase; //start the chain at base object

  //split the string based upon the slashes.
  //loop the array with forEach
  stringValue.split("/").forEach(function (value, index, arr) {
    //if searched value does not exist, create
    if (!obj[value]) {
      obj[value] = {}; //we use bracket notation, eliminating the need for eval.
    }
    obj = obj[value]; //assign the current property as newest in the chain.
    if (index == arr.length - 1 && val) {
      obj[value] = val; //if object reaches the end of the chain and there is a val set, assign it. We check the index against the array's length.
    }
  }); //array from split
}

console.log(database);

const peopleObj = {
  jim: {
    name: "jim",
    age: 20,
  },
  tim: {
    name: "tim",
    age: 22,
  },
};

const peopleArray = Object.values(peopleObj);
console.log(peopleArray);
