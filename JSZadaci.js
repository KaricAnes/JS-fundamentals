/*Write a JavaScript program to list the properties of a JavaScript object. 
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
*/

let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const listProps = (obj) => {
  const array = [];
  for (key in obj) {
    //array.push(key);
    console.log(key);
  }
  //return array;
};

console.log(listProps(student));
console.log(student);

/*
2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
 */

//uklanjanje object propertija na immutable way

const removeRolno = (obj) => {
  const obj2 = { ...obj };
  console.log(obj2);
  delete obj2.rollno;
  console.log(obj2);
  return obj2;
};
console.log(removeRolno(student));
console.log(student);

/*
 3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
*/

const lengthOfObj = (obj) => {
  const size = Object.keys(obj).length;
  return size;
};
console.log(lengthOfObj(student));

/*
4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor
*/
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

//mogao sam puknuti i filter i na taj nacin dobiti samo one knjige koje sam procitao u formi array of objs
const displayReadingStatus = (arrOfObjs) => {
  arrOfObjs.map((book) => {
    if (book.readingStatus) {
      console.log("You red book: " + book.title + " from " + book.author);
    } else {
      console.log(
        "You did not read book: " + book.title + " from " + book.author
      );
    }
  });
  //return books;
};
//console.log(library); //osta je originalan, nije mutirao
displayReadingStatus(library);

//5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes

const volumeOfCylinder = (h, r) => {
  const Pi = Math.PI;
  r = Math.pow(r, 2);
  const volume = h * r * Pi;
  return volume.toFixed(4);
};
console.log(volumeOfCylinder(5, 5));

/*
6. Write a Bubble Sort algorithm in JavaScript. Go to the editor
Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
Sample Data: [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6]*/

const bubbleSort = (arr) => {
  //sort mutira array, morao sam na immutable way da sacuvam originalni
  const array = [...arr];
  let arrSorted = array.sort();
  return arrSorted;
};

const array = [6, 4, 0, 3, -2, 1];
console.log(bubbleSort(array));
console.log(array);

const bubbleSort2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);

    for (j = 0; j < arr.length; j++) {
      console.log(j);

      if (arr[j] > arr[j + 1]) {
        console.log(arr[i + 1]);

        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort2(array));

/*
7. Write a JavaScript program which returns a subset of a string. Go to the editor
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]
 */

const subsetStr = (word) => {
  const arrayOfSubStr = [];

  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length + 1; j++) {
      arrayOfSubStr.push(word.substring(i, j));
    }
  }

  /*for(let i = 1;i < word.length; i++){            //["d", "do", "dog", "o", "og", "og"]
    arrayOfSubStr.push(word.substring(1, i+1));
  }

  for(let i = 2;i < word.length; i++){            //["d", "do", "dog", "o", "og", "g"]
  arrayOfSubStr.push(word.substring(2, i+1));
  }*/

  return arrayOfSubStr;
};

console.log(subsetStr("dog"));

var library3 = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

const sortArrayOfObjs = (obj) => {
  //jedan znaci okreci ih
  obj.sort((a, b) => (a.libraryID > b.libraryID ? 1 : -1)); // 1 3  4

  return obj;
};

console.log(sortArrayOfObjs(library3));

var arr = [
  {
    updated_at: "2018-01-01T06:25:24Z",
    foo: "bar",
  },
  {
    updated_at: "2012-01-09T11:25:13Z",
    foo: "bar",
  },
  {
    updated_at: "2014-01-05T04:13:24Z",
    foo: "bar",
  },
];

/*arr.sort(function(a, b) {
      var keyA = new Date(a.updated_at),
        keyB = new Date(b.updated_at);
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    console.log(arr);*/

arr.sort((a, b) => (a.updated_at < b.updated_at ? -1 : 1));
console.log(arr);

/**
   16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.
    Go to the editor
     */

// var element = {};
//element[ yourKey ] = yourValue;

const reverseObjProps = (obj) => {
  const objCopy = { ...obj };
  const objReversed = {};
  for (let key in objCopy) {
    console.log(key); //#FF0000     #00FF00        #FFFFFF
    objReversed[objCopy[key]] = key;
  }
  console.log(objCopy);
  return objReversed;
};

const obj5 = { "#FF0000": "red", "#00FF00": "green", "#FFFFFF": "white" };
console.log(reverseObjProps(obj5));

/*
17. Write a JavaScript function to check whether an object contains given property. 
*/

const checkIfPropExists = (obj, property) => {
  let natpis;
  for (key in obj) {
    if (key == property) {
      //console.log(property + ' property exists')
      natpis = property + " property postoji";
      break;
    } else {
      natpis = property + " property ne postoji";
    }
  }
  return natpis;
};

console.log(checkIfPropExists(obj5, "#FF0000"));

/*
 Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number),
  and ingredients (an array of strings).
On separate lines (one console.log statement for each), log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
 */

const favoiuriteRecipe = {
  title: "Majmun Kolac",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"],
};

console.log(favoiuriteRecipe.title); // Majmun Kolac
//console.log(favoiuriteRecipe[servings]);      error, servings is not defined

for (key in favoiuriteRecipe) {
  if (key == "servings") {
    console.log(key + ": " + favoiuriteRecipe[key]);
  } else if (key == "ingredients") {
    const ings = favoiuriteRecipe.ingredients;
    console.log(key + ":");
    for (let i = 0; i < favoiuriteRecipe.ingredients.length; i++) {
      console.log(ings[i]);
    }
  }
}

/*
Majmun Kolac
serves: 2
ingredients:
cinnamon
cumin
*/

/*
Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string),
 and alreadyRead (a boolean indicating if you read it yet).

Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like
'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings"
by J.R.R. Tolkien.'
*/

const allBooks5 = [
  { title: "Na Drini Cuprija", author: "Ivo Andric", alreadyRead: true },
  { title: "Basta Sljezove Boje", author: "Branko Copic", alreadyRead: true },
];

const funkcijaBooksss = (arrOfObjs) => {
  const books = arrOfObjs;
  console.log(books);

  books.map((book) => {
    if (book.alreadyRead) {
      console.log("You already red " + book.title);
    } else {
      console.log("You still need to read  " + book.title);
    }
  });
};

funkcijaBooksss(allBooks5);
