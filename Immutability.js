const state = {
  name: "Anes",
  surname: "Karic",
};

const newState = { ...state, name: "Idriz" }; //original je ostao netaknut //promjenili smo samo zeljeni property. Argument na desnoj strani je overridao argument na lijevoj.

/* name: "Anes"
surname: "Karic" */ /* name: "Idriz"
surname: "Karic" */ console.log(
  state,
  newState
);

//Warning Shallow copies
//Both object.assign and ..spread operator create shallow coppies, not deep copies.

const user = {
  name: "Cory",
  addres: {
    state: "California",
  },
};
const newUser = { ...user }; //ovo nije kloniralo i address. Ono nju prebacimo, ali je samo referenciralo na nju. Nije
//stvorilo kopiju.
console.log(newUser);

//Ovo klonira  i nested objects takodjer

//Jako bitna napomena, you only need to clone nested object, if you need to change the nested object.
const userCopy = { ...user, addres: { ...user.addres } };

/*const userCopy = {
  ...user.addres,
  state: "Bosna",
};*/

console.log(user, userCopy);

//Mozemo koristiti clone-deep ili lodash.merge, ali ne trebamo bez potrebe raditi deep kloniranje. Evo razloga:

//1) Deep Cloning is expensive

//Deep Cloning is typically wastefull jer ne moramo klonirati sve nested objekte, nego samo one koje zelimo da changamo.

//Deep Cloning uzrokuje nepotrebne re-renderinge.

//Tako da najpametnije je da kloniramo samo sub-objects koji su se promjenili.

/*
 Preporucuje se Immer ako zelimo da koristimo neku biblioteku. Sa immerom mozemo mijenjati one immutably change state properties.
 I to one koje  mi zelimo, a ne da bespotrebno kloniramo cijeli svijet. Podsjecamo, trebamo klonirati deeply klonirati samo
 one propertije koji se mijenjaju. 
*/

/*
Handling Immutable State
													  
Native JS                                        Libraries
                                             
     - Object.assign                                    Immer
     - Spread Operator                                  seamless-immutable
     - Map, filter, reduce 		                          react-addons-update
                                                        Immutable.js
                                                        Many more... */






                                  // Why Immutability 

                      //Flux                                //Redux 
               //State is mutated                    //State is immutable 

//1) Immutability = Clarity 
//Huh, who changed that state? Sa immutabilitijem, znamo tacno ko i kada je promjenio neki state property. 
// Odgovor se nalazi u reduceru, dakle. On ga j epromjenio, nema ko drugi. 
//Reducer je dakle returnao novu kopiju state i izvrsio zamjenu. 
//KAze Cory da to bas olaksava stvar, jer znamo koji fajl da otvorimo da provjerimo koji state se promjenio. 
//SA Reuxom se ne moramo pitati gdje se state update desio. Znamo sve dakle. 

//2) Immutability =  Performance 

/*
const state = {
  name: 'Anes',                <------ has this changed
  role: 'programmer'           <------ has this changed 
}
*/

//If state is immutable, ova operacija iznad provjeravanja svakog propertija pojedinacno  postaje potpuno nepotrebna. 

// if (prevStoreState !== storeState) ... 
//ako prevStoreState ne referencira na isti objekat objekat u memoriji onda znamo da se state promjenio 
//To koristi REDUX behind the scences, i to je ekstremno efikasno. 


//Uz pomoc immutabilitija i Reduxa, imamo pristup REDUX-debuggingu. Tamo vidimo kad se koja kacija okinula, sta je uradila ird... 




//Enforcing Immutability 




