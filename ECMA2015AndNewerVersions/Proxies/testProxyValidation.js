const validationProxyHandler = {
    get(target, property, proxy){
        if(property === "firstName" || property === "lastName"){
            console.log("Getting the firstName or the lastName.");
        }else if(property === "age"){
            console.log("Getting the age.");
        }
        
        return target[property];
    },
    set(target, property, value, proxy){
        if(property === "firstName" || property === "lastName"){
            if(typeof value === "string"){
                console.log(`Setting the firstName or the lastName to ${value}`);
                target[property] = value;
            }else{
                throw new TypeError(`The type of the property ${property} must be a string`);
            }
        }else if(property === "age"){
            if(typeof value === "number"){
                console.log(`Setting the age to ${value}`);
                target[property] = value;
            }else{
                throw new TypeError(`The type of the property ${property} must be a number`);
            }
        }
    }
}

class Person{
    constrcutor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

const person = new Proxy(
    new Person("testFirstName", "testLastName", 23),
    validationProxyHandler
);

const firstNameTest = person.firstName;
const lastNameTest = person.lastName;
const ageTest = person.age;

person.firstName = "testFirstName2";
person.lastName = "testLastName2";
person.age = 27;