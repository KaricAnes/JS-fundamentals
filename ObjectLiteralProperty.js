const registerUSer = (fName, lName) => {
  let person = {
    fName,
    lName, //vrhunska sintaksa
    age: 18,
    isAdult() {
      return this.age >= 19; //mozemo i skraceno deklarisati funckciju, ali samo unutar objekta
    },
  };
  //return Object.keys(person);
  let imena = { kll: "fdfd" };
  for (let key in person) {
    if (key === "fName") {
      imena.ime = fName;
    }
  }
  return imena;
};

console.log(registerUSer("Anes", "Karic"));
