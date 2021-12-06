class Animal{
    constructor(name){
        this.name = name;
    }
    animalMethod(){
        console.log("Animal method");
    }
}

class Dog extends Animal{
    constructor(name, race){
        super(name);
        this.race = race;
    }
    dogMethod(){
        console.log("Dog method");
    }
}

const dog = new Dog("testName", "testRace");
console.dir(dog);
console.dir(Object.getPrototypeOf(dog));
console.dir(Object.getPrototypeOf(Object.getPrototypeOf(dog)));
console.dir(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(dog))));  