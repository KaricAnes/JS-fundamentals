const imena = ["Anes", "Rejhana", "Anes", "Rasim", "Anes"];

const ponImena = (names) => {
  const imena = {};
  for (let i = 0; i < names.length; i++) {
    imena[names[i]] = imena[names[i]] ? imena[names[i]] + 1 : 1;
  }
  return imena;
};

//console.log(ponImena(imena));
//zamjena mjesta koristenjem trece varijable
let a = 4;
let b = 2;

let c = a;
a = b;
b = c;
//console.log(b);
//kako im zamjeniti mjesta bez koristenja trece varijable?

let k = 5,
  m = 6;
[k, m] = [m, k]; //radi i za stringove
console.log(k, m); //6 5

let s = 10;
t = 20;
s = s + t;
t = s - t;
s = s - t;
console.log(s, t); //20, 10

let brojici = ["Bbb", "aaa", "ddd", "ccc"];

let brojiciSorted = brojici.sort((a, b) => {
  firstString = a.toLowerCase();
  secondString = b.toLowerCase();
  if (firstString < secondString) {
    return -1;
  } else if (firstString > secondString) {
    return 1;
  } else {
    return 0;
  }
});
//console.log(brojiciSorted);

let testArray = [
  { title: "film: 14 epizoda" },
  { title: "film: 15 epizoda" },
  { title: "1kjshbla" },
  { title: "ccc" },
  { title: "Bbb" },
  { title: "aaa" },
];

const sortTestArray = (arrayOfObjs) => {
  let poluSortedTestArray = arrayOfObjs
    .map((tit) => {
      return tit.title;
    })
    .sort((a, b) => {
      return a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      });
    });
  return poluSortedTestArray;
};
console.log(sortTestArray(testArray));
