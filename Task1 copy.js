const handleError = (error) => {
  return error;
};

const lookup = (obj, path) => {
  const pathSplitted = path.split(".");
  console.log(pathSplitted); //["mobPhone", "manufacturer"]
  let foundedItem = { ...obj };
  if (path !== "") {
    for (let i = 0; i < pathSplitted.length; i++) {
      // foundedItem = obj[pathSplitted[i]];  evo zasto samo foundedItem definisao iznad samo. items['color'] --> undefined
      foundedItem = foundedItem[pathSplitted[i]];

      if (foundedItem === undefined) {
        return handleError("Unknown Path");
      }
    }
  } else {
    return handleError("Empty Path");
  }
  return foundedItem;
};

const items = {
  mobPhone: {
    manufacturer: "Apple",
    color: "orange",
    model: "iPhone 11 Pro Max",
    price: 55,
  },
  laptop: {
    manufacturer: "Asus",
    color: "black",
    model: "Asus ROG Zephyrus G14",
    price: 55,
    izgled: {
      naOko: "Dobar",
    },
  },
};

const path = "laptop.izgled.naOko";

console.log(lookup(items, path));
