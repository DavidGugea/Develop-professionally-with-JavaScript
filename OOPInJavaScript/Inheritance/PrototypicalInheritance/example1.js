const dog = {
    name : null,
    testMethod(){
        console.log("This is a test method");
    }
}

const dog1 = Object.create(Dog);
dog1.name = "Dog1";
console.dir(dog1);
console.dir(dog);