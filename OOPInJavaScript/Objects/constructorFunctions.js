function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const person = new Person("firstNameTest", "lastNameTest", 18);
console.log(person);