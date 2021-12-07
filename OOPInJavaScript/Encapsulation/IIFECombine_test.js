const Employee = ( 
() => {
    function Employee(firstName, lastName, id){
        var firstName = firstName;
        var lastName = lastName;
        var id = id;

        this.getFirstName = function(){
            return firstName;
        }
        this.getLastName = function(){
            return lastName;
        }
        this.getId = function(){
            return id;
        }
    }

    Employee.prototype.print = function(){
        return `${this.getFirstName()} ${this.getLastName} ( ${this.getId()} )`;
    }

    return Employee;
})();

const max = new Employee("Max", "Mustermann", 2345);
console.log(max.getFirstName());
console.log(max.getLastName());
console.log(max.getId());