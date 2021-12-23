const symbol = Symbol.for("test symbol");

const object = {
    property_1 : 1,
    property_2 : 2,
    [symbol] : 17
}

console.log(Symbol.keyFor(symbol));

for(let key in object){
    console.log(key);
}