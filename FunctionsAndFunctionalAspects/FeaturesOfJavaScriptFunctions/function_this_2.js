const anotherPerson = {
    firstName : "Moritz",
    getFirstName : getFirstNameGlobal
}

const yetAnotherPerson = {
    firstName : "Peter",
    getFirstName : getFirstNameGlobal
}

function getFirstNameGlobal(){
    return this.firstName;
}

console.log(anotherPerson.getFirstName());
console.log(yetAnotherPerson.getFirstName());