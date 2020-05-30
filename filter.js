/*
      filter metoda ne dira stari, nego vraca novi array
      filter uzima function kao input, a ta funkcija je executana na svaki element u arrayu
       a zove se filter zato sto odluci za svaki element da li je prosao kroz funkciju i zaodovoljio
      i da li zasluzuje da bude clan tog novog Arraya: newArray2
      ovo result je input, mozemo ga nazvati kako zelimo, bukvalno clan starog arraya
      a onda na drugom mjestu moramo vratiti true ili false
      ovo dole unutar filtera je skracena arrow funkcija, ne moramo pisati return
      ako napisemo true, onda ce filter vratiti svaki clan i samo cemo napraviti kopiju originalnog: const newArray = [...state.results] eh ovo 
      Mi ne zelimo da nam vrati true za svaki elmenat, nego samo za one koji nemaju odredjeni id(id elementa koji ce biti deleted)
      const newArray2 = state.results.filter(result => true);
      dodaj result u newArray2 ako je id starog elemnta drugaciji od id-a onog koji je stigao preo payloada preko akcije
      ovaj result je elemenat iz originalnog state-a iz rezultata
      action.resultElId dolazi iz akcije preko payloada
      */

//const newArray2 = state.results.filter(result => result.id !== action.resultElId);

/***************************** */
const numbers = [1, -1, -5, 2, 3];

const filtered = numbers.filter((number) => number >= 0);

// console.log(filtered);
/***************************** */

const nizRestorana = [
  { name: "buregdzinica", rv: 8 },
  { name: "panera", rv: 24 },
  {},
  { name: "bajro", rv: 0 },
];

function isValidRv(obj) {
  return obj !== undefined && typeof obj === "number" && !isNaN(obj);
}

function filterByRv(pekara) {
  if (isValidRv(pekara.rv) && pekara.rv !== 0 && pekara.rv == 24) {
    return true;
  }
  return false;
}

let arrBrRvs = nizRestorana.filter(filterByRv);

console.log("Filtered Array\n", arrBrRvs);
console.log(nizRestorana);
//console.log('Number of Invalid Entries = ', inavalidRvs)

/*
let arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ]
  
  let invalidEntries = 0
  
  function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj)
  }
  
  function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
      return true
    } 
    invalidEntries++
    return false;
  }

  
  let arrByID = arr.filter(filterByID)
  
  //console.log('Filtered Array\n', arrByID)
  // Filtered Array
  // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  
  //console.log('Number of Invalid Entries = ', invalidEntries)
  // Number of Invalid Entries = 5


*/
