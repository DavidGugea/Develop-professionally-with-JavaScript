function createPerson(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName
    };
}

function createPerson(firstName, lastName, age){
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
}

console.dir(createPerson("firstName", "lastName"));
console.dir(createPerson("firstName", "lastName", 17));