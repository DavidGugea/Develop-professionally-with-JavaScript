const max = {
    firstName : "Max",
    lastName : "Mustermann"
}

const test = Object.create(max);

console.dir(max);
console.dir(Object.getPrototypeOf(max));
console.log(max.__proto__ === Object.getPrototypeOf(max));
console.log("-------");
console.dir(Object);
console.dir(Object.getPrototypeOf(Object));
console.dir(Object.getPrototypeOf(Object.getPrototypeOf(Object)));