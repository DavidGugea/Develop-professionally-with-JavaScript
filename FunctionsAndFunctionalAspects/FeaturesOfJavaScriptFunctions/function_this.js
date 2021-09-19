const person = {
    firstName : "Max",
    getFirstName : function(){
        return this.firstName;
    }
}

console.log(person.getFirstName()); // Max

name = 'global Name'; // set it globally ** DEPRECATED **
function getFirstNameGlobal(){
    return this.name;
}
console.log(getFirstNameGlobal()); // undefined without the firstName