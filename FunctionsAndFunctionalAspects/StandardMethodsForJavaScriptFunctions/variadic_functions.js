const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(numbers)); // NONE ( Math.max(...numbers) )
// console.log(Math.max(...numbers)); // 5
console.log(Math.max.apply(null, numbers)); // best practice is to set 'this' to 'null' if it's not used.