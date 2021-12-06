/*
The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
*/
function extend(target, source){
    for(let property in source){
        if(source.hasOwnProperty(property)){
            target[property] = source[property];
        }
    }

    return target;
}

const person = {
    name : "testName1",
    getName(){
        return this.name;
    }
};

const dog = {
    name : "testName2",
    bark(){
        console.log("Barking");
    }
}

extend(dog, person);
console.log(dog.getName());
console.dir(dog);
console.dir(Object.getPrototypeOf(dog));