class Person{
    constructor(firstName, lastName){
        // Instance properties
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Static methods
    static createDummyPerson(){
        return new Person("Max", "Mustermann");
    }

    // Instance methods
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
}

// Static property
Person.MAX_WEIGHT = 2000;