let partialApplication = function(fn, ...outerArgs){
    return function(...innerArgs){
        return fn(...outerArgs, ...innerArgs);
    }
}

let add = function(a, b, c){
    return a + b + c;
}

let partialAdd = partialApplication(add, 2, 3);
console.dir(partialAdd(4));

/*
let addThreeNumbers = function(a, b, c){
    return a + b + c;
}

console.log(addThreeNumbers(1, 2, 3));
*/