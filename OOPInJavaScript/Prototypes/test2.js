class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    testMethod(){
        console.log("This is a test method.");
    }
}

const person = new Person("testFirstName", "testLastName");

console.dir(Person);
console.dir(person);
console.dir(Object.getPrototypeOf(person));
console.dir(Object.getPrototypeOf(Object.getPrototypeOf(person)));