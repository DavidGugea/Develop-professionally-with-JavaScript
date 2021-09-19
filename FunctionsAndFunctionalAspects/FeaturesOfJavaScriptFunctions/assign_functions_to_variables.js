function add(x, y){
    return x + y;
}

const operation = add;

console.log(add(2, 3));
console.log(operation(2, 3));

/*
console.log("ADD DIR -- > ");
console.dir(add);
console.log("-------------------------------");
console.log("OPERATION DIR -- > ");
console.dir(operation);
*/

console.log(operation instanceof add); // false

// both true 
console.log(operation == add);
console.log(operation === add);