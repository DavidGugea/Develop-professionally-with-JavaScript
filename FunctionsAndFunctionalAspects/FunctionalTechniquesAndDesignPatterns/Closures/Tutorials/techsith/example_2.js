let passed = 3;

let addTo = function(){
    let inner = 2;
    return passed + inner;
}

console.dir(addTo);
*/

/*
let addTo = function(passed){
    let add = function(inner){
        return passed + inner;
    }

    return add;
}

let addThree = new addTo(3);