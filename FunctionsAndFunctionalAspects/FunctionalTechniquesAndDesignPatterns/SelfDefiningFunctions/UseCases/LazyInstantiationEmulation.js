function calculate(){
    console.log("calculate()");
    return "Result";
}

function getResult(){
    const result = calculate();
    getResult = function(){
        return result;
    }

    return result;
}

console.log(getResult()); // calculate() then Result
console.log(getResult()); // Result
console.log(getResult()); // Result
console.log(getResult()); // Result