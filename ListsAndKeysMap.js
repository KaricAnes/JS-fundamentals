//List and Keys
//https://reactjs.org/docs/lists-and-keys.html        --> link za liste i keyeve

/*
  Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the 
 array to give the elements a stable identity.

 Key should be s[ecified inside of array.]
 */


const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => number * 2);
console.log(doubled); //[2, 4, 6, 8, 10]


const numbers2 = [1, 2, 3, 4, 5];

/*
<ul>

const listItems = numbers2.map(number => (
<li>{number}</li>
)
);

</ul>
*/




