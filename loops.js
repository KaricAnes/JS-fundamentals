// U objects.js imam vec dosta Loopova, tacnije samo for loop

for (let i = 0; i < 5; i++) {
  //  console.log('Loop' + i);
  if (i == 3) break; //0, 1, 2, 3
}

//Loping kroz array

const names = ["john", "bob", "marry", "joe"];

for (let i = 0; i < names.length; i++) {
  if (names[i] == "john") {
    // console.log(names[i]);
    names[i] = "safet";
  }
  //console.log(names[i]);
}

//for of    --> sporije od obicnog for Loopa
for (name of names) {
  // console.log(name);
}

const user = { firstName: "John", lastName: "Kurton" };

for (key in user) {
  // console.log(key);
  //console.log(user[key]);
  if (user[key] == "John") {
    // console.log(user[key]);
  }
}

//i smo definsiali izvan while loopa
let i = 0;
while (i < 10) {
  //console.log(i);             //uvecavamo za 2
  i += 2;
  if (i == 4) break; //0,2
}

//i smo definsiali izvan while loopa
let j = 0;
while (j < 10) {
  j++;
  if (j == 5) continue;
  console.log(j);
}
