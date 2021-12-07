function Employee(firstName, lastName, id){
    var _firstName = firstName;
    var _lastName = lastName;
    var _id = id;
}

Employee.prototype.getFirstName = function(){
    return this._firstName;
}
Employee.prototype.getLastName = function(){
    return this._lastName;
}
Employee.prototype.getId = function(){
    return this._id;
}

Employee.prototype.print = function(){
    return `${this._firstName} ${this._lastName} ( ${this._id} )`;
}

const max = new Employee("Max", "Mustermann", 1);
console.log(max.getFirstName());
console.log(max.getLastName());
console.log(max.getId());