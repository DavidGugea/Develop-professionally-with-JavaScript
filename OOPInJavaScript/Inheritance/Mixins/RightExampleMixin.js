const DrivingMixin = (superclass) => class extends superclass{
    drive(){
        console.log("Driving.");
    }
}

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName || "";
        this.lastName = lastName || "";
    }
    sayHello(){
        console.log(`${this.firstName} : Hello`);
    }
}

class DrivingPerson extends DrivingMixin(Person){}

const max = new Person("Max", "Mustermann");
console.dir(max);
console.dir(Object.getPrototypeOf(max));
console.dir(Object.getPrototypeOf(Object.getPrototypeOf(max)));

console.log("-".repeat(25));

const moritz = new DrivingPerson("Moritz", "Mustermann");
console.dir(moritz);
console.dir(Object.getPrototypeOf(moritz));
console.dir(Object.getPrototypeOf(Object.getPrototypeOf(moritz)));
console.dir(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(moritz))));
console.dir(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(moritz)))));
console.dir(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(moritz))))));