class Person{
    // Constructor

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Methods
    toString(){
        return `${this.firstName} ${this.lastName}`;
    }

    // Static methods
    static generateRandomNumber(){
        return Math.random();
    }
}

const max = new Person("Max", "Mustermann");
console.log(max.toString());
console.log(Person.generateRandomNumber());