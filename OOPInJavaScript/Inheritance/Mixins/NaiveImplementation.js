function mixin(source, target){
    for(let property in source){
        if(source.hasOwnProperty(property)){
            target[property] = source[property];
        }
    }
}

function Person(firstName, lastName){
    this.firstName = firstName || '';
    this.lastName = lastName || '';
}
Person.prototype.sayHello = function(){
    console.log(`${this.firstName} : Hello`);
}

const max = new Person("Max", "Mustermann");
max.sayHello();
console.dir(Person.prototype);

function Driver(){}
Driver.prototype.drive = function(){
    console.log("Driving.");
}

mixin(Driver.prototype, Person.prototype);

const moritz = new Person("Moritz", "Mustermann");

console.log("---");

moritz.sayHello();
moritz.drive();

console.dir(Person.prototype);

console.log("---");

max.drive();