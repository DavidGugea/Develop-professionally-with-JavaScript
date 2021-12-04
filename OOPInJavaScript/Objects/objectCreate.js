const person = Object.create(Object.__proto__.__proto__, {
    firstName : {
        value : "firstNameTest",
        writable : true,
        enumerable : true,
        configurable : false,
    }
});

console.dir(person);
console.log(Object.getPrototypeOf(person));