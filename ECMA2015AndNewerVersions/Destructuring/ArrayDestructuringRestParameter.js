const testArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
];

const [ firstNumber, ...restNumbers ] = testArray;

console.log(firstNumber);
console.log(restNumbers);