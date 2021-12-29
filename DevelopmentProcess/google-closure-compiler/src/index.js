/**
 * Person
 * @param {String} firstName 
 * @param {String} lastName 
 * @class Person
 * @constructor
 */
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    /**
     * This is a method that prints "Hello World" to the console
     * 
     * @method sayHello
     * @returns {void}
     */
    this.sayHello = function () {
        console.log("Hello World");
    }
}