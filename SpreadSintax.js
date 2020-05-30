const carCodes = "abc";

const carCodesBroken = (car1, car2, car3) => {
  console.log(car1);
  console.log(car2);
  console.log(car3);
};

carCodesBroken(...carCodes);

