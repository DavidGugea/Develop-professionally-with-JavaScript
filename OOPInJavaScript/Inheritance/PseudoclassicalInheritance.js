function Animal(name){
    this.name = name;
}
Animal.prototype.eat = function(){
    console.log("Eating");
}
function Dog(name, race){
    Animal.call(this, name);
    this.race = race;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
    console.log("Barking.");
}

const dog1 = new Dog("testName1", "testRace1");
const dog2 = new Dog("testName2", "testRace2");

dog2.bark = function(){
    for(let i = 0 ; i < 2 ; i++){
        Dog.prototype.bark.call(this);
    }
}

dog1.bark();
console.log("---");
dog2.bark();