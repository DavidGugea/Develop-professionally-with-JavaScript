const max = {
    firstName : "Max",
    lastName : "Mustermann"
}

console.dir(max.__proto__);
console.dir(Object.getPrototypeOf(max));
console.log("-------");
console.dir(Object);
console.dir(Object.getPrototypeOf(Object));
console.dir(Object.getPrototypeOf(Object.getPrototypeOf(Object)));