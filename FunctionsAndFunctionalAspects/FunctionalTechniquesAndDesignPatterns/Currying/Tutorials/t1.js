'use strict'
let avg = function(...n){
    let tot = 0;
    for(let i = 0 ; i < n.length; i++){
        tot += n[i];
    }

    return tot/n.length;
}

let func = function(fn, ...n){
    return function(...m){
        return fn.apply(this, n.concat(m));
    }
}

let doAvg = func(avg, 1, 2, 3);
console.log(doAvg(4, 5, 6));

/*
let add = function(a){
    return function(b){
        return a + b;
    }
}

let addToFive = add(5);
console.log(addToFive(1));
*/