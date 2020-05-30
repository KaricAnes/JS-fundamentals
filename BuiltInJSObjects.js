const builtInObjs = (n) => {
  console.log(Math.PI * n); //15.446
  console.log(Math.max(2, 42, 29)); //42
  console.log(Math.round(29.4)); //29
};

builtInObjs(5);

let date = new Date();
console.log(date);
