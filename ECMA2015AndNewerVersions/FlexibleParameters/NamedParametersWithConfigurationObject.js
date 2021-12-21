function createPerson(config){
    return {
        firstName : config.firstName,
        lastName : config.lastName,
        height : config.height,
        weight : config.weight,
        dayOfBirth : config.dayOfBirth,
        monthOfBirth : config.monthOfBirth,
        yearOfBirth : config.yearOfBirth
    }
}


let person = createPerson(
    {
        firstName : "testFirstName",
        lastName : "testLastName",
        height : 175,
        weight : 80,
        dayOfBirth : "testDayOfBirth",
        monthOfBirth : "testMonthOfBirth",
        yearOfBirth : "testYearOfBirth"
    }
);

console.dir(person);