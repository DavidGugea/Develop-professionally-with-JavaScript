/*
const func_example = (arg1) => {
    return (arg2) => {
        return (arg3) => {
            return `${arg1}, ${arg2}, ${arg3}`;
        }
    }
}

const curry_example = func_example("first")("second")("third");
console.log(curry_example);
*/

// Refactoring with arrow functions:
const func_example = arg1 => arg2 => arg3 => `${arg1}, ${arg2}, ${arg3}`;
const curry_example = func_example("first")("second")("third");
console.log(curry_example);