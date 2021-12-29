// @ts-check
const {
    add,
    multiply,
    subtract,
    divide
} = require("./calculator.js");

/**
 * @file index.js is the root file for this example app
 * @author David G.
 * @see <a href="https://traversymedia.com">Traversy Media</a>
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = "John Doe";

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97.7, 76, 89];

/**
 * @type {{id:number, text: string}}
 */
const todo = {
    id: 1,
    text: "Hello",
}


/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
    return `$${amount + tax * amount}`;
}

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student Name
 * @property {string|number} [age] - Student Age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
    id: 1,
    name: "John Doe",
    isActive: true
}

/**
 * Class to create a person object
 */
class Person {
    /**
     * 
     * @param {Object} personInfo - Information about the person
     */
    constructor(personInfo) {
        /**
         * @property {string} name - Person name
         */
        this.name = personInfo.name;

        /**
         * @property {number} age - Person age 
         */
        this.age = personInfo.age;
    }

    /**
     * @property {Function} greet - A greeting with the name and age
     * @returns {void}
     */
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}.`);
    }
}

/**
 * Person one
 * See {@link Person}
 */
const person1 = new Person({
    name: "John Doe",
    age: 30
});
person1.greet();

console.log(add(20, 50));