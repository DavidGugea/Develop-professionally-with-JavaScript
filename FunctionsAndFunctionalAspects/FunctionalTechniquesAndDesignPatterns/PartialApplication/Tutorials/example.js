/*
1 - Partial application in JavaScript
Patially  applying a function means creating a new function by pre-filling some of the arguments to the original function.
*/

function add(x, y, z){
    return x + y + z;
}

add(1, 2 ,3);

function partial(fn, ...args){
    return function(...moreArgs){
        return fn(...args, ...moreArgs);
    }
}

// const plus3 = partial(add, 1, 2);
const plus3 = add.bind(null, 1, 2);
console.log(plus3(5));