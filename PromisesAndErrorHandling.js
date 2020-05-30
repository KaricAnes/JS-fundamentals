//Error handling: try and catch

//Zelimo da kada dodje do nekog errora da nas program ne prestane da se izvrsava u tom trenutku.

//Zelimo da nastavi dalje sa radom. To mozemo omoguciti pomocu try and catch-a. To je i Ibro radio.

try {
  let car = newCar;
} catch (error) {
  console.log("error: ", error);
} finally {
  console.log("contioniuing... Allways executes"); //finally block allways executes
}
console.log("contioniuing...");

//da nema try i catch-a, ovaj kod iznad bi pao u potpunosti i ne bi se izvrsilo ovo ispod 'contioniuing'
