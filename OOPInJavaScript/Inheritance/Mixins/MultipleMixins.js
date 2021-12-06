const DrivingMixin = (superclass) => class extends superclass{
    drive(){
        console.log("Driving.");
    }
}

const FlyingMixin = (superclass) => class extends superclass{
    fly(){
        console.log("Flying.");
    }
}

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        console.log(`${this.firstName} : Hello`);
    }
}

class DrivingPerson extends DrivingMixin(Person){};
class FlyingPerson extends FlyingMixin(Person){};
class FlyingAndDrivingPerson extends FlyingMixin(DrivingMixin(Person)){};

const flyingAndDrivingPerson = new FlyingAndDrivingPerson("testFirstName", "testLastName");
console.dir(flyingAndDrivingPerson);