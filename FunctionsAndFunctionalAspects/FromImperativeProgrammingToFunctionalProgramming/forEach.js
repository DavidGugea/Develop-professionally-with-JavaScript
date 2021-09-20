const numbers = [1, 2, 3, 4, 5];
/*

IMPERATIVE PROGRAMMING WHERE YOU DESCRIBE **HOW** YOU DO SOMETHING: 
for(let i = 0 ; i < artists.length ; i++){
    console.log(numbers);
}
*/

// FUNCTIONAL PROGRAMMING WITH forEach
numbers.forEach((value, index, array) => {
    console.log(value);
});