const add2 = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiplyBy5 = (x) => x * 5;

function test(...args){
    testFunction(args);
}
function testFunction(value){
    console.log(...value);
}

test(1, 2, 3, 4, 5, 6);


const compose = (...callbackFunctions) => {
    return function(...compositionValues){
        return callbackFunctions.reduceRight(
            (accumulator, currentCallback, currentIndex, callbackFunctionsArray) => Array.isArray(accumulator) ? currentCallback(...accumulator) : currentCallback(accumulator),
            compositionValues
        )
    }
}

const pipe = (...callbackFunctions) => {
    return function(...compositionValues){
        return callbackFunctions.reduce(
            (accumulator, currentCallback, currentIndex, callbackFunctionsArray) => Array.isArray(accumulator) ? currentCallback(...accumulator) : currentCallback(accumulator),
            compositionValues
        )
    }
}


const add2ThenSubtract1ThenMultiplyBy5 = compose(multiplyBy5, subtract1, add2);
const add2ThenSubtract1ThenMultiplyBy5_Piping = pipe(add2, subtract1, multiplyBy5)
console.log(add2ThenSubtract1ThenMultiplyBy5(4));
console.log(add2ThenSubtract1ThenMultiplyBy5_Piping(4));

/*
const result = multiplyBy5(subtract1(add2(4)));
console.log(result);

const compose = (...callbackFunctions) => {
    return function(value){
        return callbackFunctions.reduceRight(
            (accumulator, currentCallback, currentIndex, callbackArray) => {
                console.log(currentCallback);
                return currentCallback(accumulator);
            },
            value
        )
    }
}

const pipe = (...callbackFunctions) => {
    return function(value){
        return callbackFunctions.reduce(
            (accumulator, currentCallback, currentIndex, callbackArray) => {
                console.log(currentCallback);
                return currentCallback(accumulator);
            },
            value
        )
    }
}

const composedFunctions = compose(multiplyBy5, subtract1, add2);
console.log(composedFunctions(4));
const pipeFunctions = pipe(add2, subtract1, multiplyBy5);
console.log(pipeFunctions(4));
*/