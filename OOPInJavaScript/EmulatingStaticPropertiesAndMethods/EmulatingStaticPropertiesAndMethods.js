function Person(firstName, lastName){
    // Instance properties
    this.firstName = firstName;
    this.lastName = lastName;
}

// static property
Person.MAX_HEIGHT = 2000;
// static method
Person.createDummyPerson = function(){
    return new Person("Max", "Mustermann");
}

// Instance methods
Person.prototype.getFirstName = function(){
    return this.firstName;
}
Person.prototype.getLastName = function(){
    return this.lastName;
}

console.dir(Person);