const person = {
    firstName : "testFirstName",
    lastName : "testLastName",
    address : {
        postalCode : 23456,
        street : "testStreetName 11"
    }
};

const {
    firstName : firstNameExtracted,
    lastName : lastNameExtracted,
    address : {
        // postalCode = postalCodeExtracted
        street: streetExtracted
    }
} = person;


console.log(firstNameExtracted);
console.log(lastNameExtracted);
// console.log(postalCodeExtracted);
console.log(streetExtracted);