function Employee(firstName, lastName, id){
    // Private Properties
    let _firstName = firstName;
    let _lastName = lastName;
    let _id = id;
    
    // Privileged public methods
    this.getFirstName = function(){
        return _firstName;
    }
    this.getLastName = function(){
        return _lastName;
    }
    this.getId = function(){
        return _id;
    }

    this.setFirstName = function(newFirstName){
        _firstName = newFirstName;
    }
    this.setLastName = function(newLastName){
        _lastName = newLastName;
    }
    this.setId = function(newId){
        _id = newId;
    }

    this.print = function(){
        return `${_firstName} ${_lastName} ( ${_id} )`;
    }
}

const max = new Employee("Max", "Mustermann", 2345);
console.dir(max);
max.setFirstName("Moritz");
console.log(max.print());