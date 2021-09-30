const multiply = (x, y) => x * y;
const curriedMultiply = x => y =>  x * y; 

/*
console.log(multiply(2, 3));
console.log(curriedMultiply(2));
console.log(curriedMultiply(2)(3));
*/

// Partially applied functions are a common use of currying
const timesTen = curriedMultiply(10);
console.log(timesTen);
console.log(timesTen(8));

// Another example
const updateElemText = id => content => document.getElementById(`${id}`).textContent = content;

const updateHeaderText = updateElemText("header");
updateHeaderText("Updated Header Text");