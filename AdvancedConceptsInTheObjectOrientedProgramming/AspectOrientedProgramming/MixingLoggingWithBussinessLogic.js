'use strict';
class Calculator {
    sum(x, y) {
        console.log(`Calling sum() with ${x} and ${y}`);
    }

    prod(x, y) {
        console.log(`Calling prod() with ${x} and ${y}`);
    }
}

let calculator = new Calculator();
console.log(calculator.sum(5, 6));
console.log(calculator.prod(5, 6));