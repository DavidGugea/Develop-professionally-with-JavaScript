function space(msg) {
    for (let i = 0; i < 3; i++) {
        console.log(`${"-".repeat(25)}${msg}${"-".repeat(25)}`);
    }
}

// Creating the 'class' ( using class syntax ) && creating the constructor function && creating the object literal
class PersonClassSyntax {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    testMethod() {
        console.log("This is a test method.");
    }
}

function PersonConstructorFunction(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.testMethod = function () {
        console.log("This is a test method.");
    }
}

// Creating the objects

PersonObjectLiteral = {
    firstName: "firstNameObjectLiteral",
    lastName: "lastNameObjectLiteral",
    testMethod: function () {
        console.log("This is a test method.");
    }
}

const personClassSyntax = new PersonClassSyntax("firstNameClassSytnax", "lastNameClassSyntax");
const personConstructorFunction = new PersonConstructorFunction("firstNameConstructorFunction", "lastNameConstructorFunction");

space("What is **Object** and its prototypes ( there are 3 objects with then name ***Object*** )");

console.dir(Object);
console.dir(Object.getPrototypeOf(Object));
console.dir(Object.getPrototypeOf(Object.getPrototypeOf(Object)));

space("Class Syntax");

console.dir(PersonClassSyntax);
console.dir(Object.getPrototypeOf(PersonClassSyntax));
console.dir(Object.getPrototypeOf(Object.getPrototypeOf(PersonClassSyntax)));

space("Constructor function");

console.dir(personConstructorFunction);
console.dir(Object.getPrototypeOf(personConstructorFunction));
console.dir(Object.getPrototypeOf(Object.getPrototypeOf(personConstructorFunction)));

space("Object literal");

console.dir(PersonObjectLiteral);
console.dir(Object.getPrototypeOf(PersonObjectLiteral));
console.dir(Object.getPrototypeOf(Object.getPrototypeOf(PersonObjectLiteral)));

space("END");

console.log(Object.getPrototypeOf(personClassSyntax) === PersonClassSyntax.prototype);