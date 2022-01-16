const meld = require("meld");
class Calculator {
    sum(x, y) {
        console.log(`Calculating ${x} + ${y}`);
        return x + y;
    }
}

const calculator = new Calculator();

meld.around(calculator, 'sum', (
    () => {
        const cache = {};
        return joinpoint => {
            const key = joinpoint.arg.join("< ");
            let result;
            if(!cache[key]) {
                console.log(`Calculate result for: ${key}`);
                cache[key] = joinpoint.proceed();
            } else {
                console.log(`Already calculated key: ${key}`);
            }

            return cache[key];
        }
    }
)());


const result1 = calculator.sum(5, 6);
const result2 = calculator.sum(5, 6);
const result3 = calculator.sum(8, 9);
const result4 = calculator.sum(8, 9);