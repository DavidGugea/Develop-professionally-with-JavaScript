const personValidator = {
    set(object, property, value){
        if(property === "age"){
            if(!Number.isInteger(value)){
                throw new TypeError("Age has to be a number");
            }
        }

        object[property] = value;
    }
}

const person = new Proxy({}, personValidator);
person.age = 100;
console.log(person.age);
person.age = "test string";