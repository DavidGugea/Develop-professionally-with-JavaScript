// @ts-check
const _ = require("lodash");

/**
 * @type {Array}
 */
let collection = [];
for (let i = 0; i <= 100; i++) {
    collection.push(i);
}

_.each(
    collection,
    (value, index) => {
        if (index % 5 == 0) {
            console.log(`${value} < -- > ${index}`);
        }
    }
)

/**
 * Add function
 * @param {Number} a - First parameter
 * @param {Number} b - Second parameter
 * @returns {Number} - The sum between a and b
 */
const add = (a, b) => {
    return a + b;
}

/**
 * Subtract function
 * @param {Number} a - First parameter
 * @param {Number} b - Second parameter
 * @returns {Number} - The difference between a and b
 */
const subtract = (a, b) => {
    return a - b;
}

/**
 * Multiply function
 * @param {Number} a - First parameter
 * @param {Number} b - Second parameter
 * @returns {Number} - The multiplication between a and b
 */
const multiply = (a, b) => {
    return a * b;
}

/**
 * Division function
 * @param {Number} a - First parameter
 * @param {Number} b - Second parameter
 * @returns {Number} - The division between a and b
 */
const divide = (a, b) => {
    return a / b;
}

/**
 * Creates a new Person
 * @class
 */
class Person {
    /**
     * Person class
     * @param {Number} id - Id of the person
     * @param {String} firstName - First name of the person
     * @param {String} lastName - Last name of the person
     * @param {Number} age - Age of the person
     * @param {String} birthday - Birthday of the person
     * @constructs
     */
    constructor(id, firstName, lastName, age, birthday) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.birthday = birthday;
    }

    /**
     * Prints the data of the person out to the console
     * @returns {void}
     */
    print() {
        console.log(`| id -- > ${this.id} | firstname -- > ${this.firstName} | lastName -- > ${this.lastName} | age -- > ${this.age} | birthday -- > ${this.birthday} |`);
    }
}

const person = new Person(
    1, "firstNameTest", "lastNameTest", 25, "15-10-2003"
);

person.print();