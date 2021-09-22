/* A higher order function is any funciton which takes a function as an argument, returns a function, or both */

// Start with small unary ( one parameter/argument ) function

const add2 = (x) => x + 2;
const subtract1 = (x) => x-1;
const multiplyBy5 = (x) => x * 5;

// Notice how the functions eecute from inside to outside & right to left
const result = multiplyBy5(subtract1(add2(4))); // NOT A COMPOSED FUNCTION
console.log(result);