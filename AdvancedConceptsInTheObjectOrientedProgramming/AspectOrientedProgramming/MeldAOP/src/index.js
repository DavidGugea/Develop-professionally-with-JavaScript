const meld = require("meld");
class Calculator {
    sum(x, y) {
        console.log(`Calculating ${x} + ${y}`);
        return x + y;
    }
}

const calculator = new Calculator();
meld.before(calculator, 'sum', (...args) => {
    console.log(
        `Calling calculator.sum() with ${args.join(", ")}`
    );
});

meld.after(calculator, 'sum', result => {
    console.log(
        `The result of calculator.sum() was ${result}`
    );
});

console.log(calculator.sum(5, 6));