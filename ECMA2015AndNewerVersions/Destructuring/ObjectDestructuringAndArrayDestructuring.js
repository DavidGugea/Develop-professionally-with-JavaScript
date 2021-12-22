const person = {
	firstName : "testFirstName",
	lastName : "testLastName",
	address : {
		postCode : "testPostCode",
		street : "testStreetName 11"
	},
	phoneNumbers : [
		123456789,
		112233445
	]
};

const {
	firstName : firstNameExtracted,
	lastName : lastNameExtracted,
	address : {
		postCode : postCodeExtracted,
		street : streetExtracted
	},
	phoneNumbers : [firstPhoneNumberExtracted, secondPhoneNumberExtracted]
} = person;

console.log(firstNameExtracted);
console.log(lastNameExtracted);
console.log(postCodeExtracted);
console.log(streetExtracted);
console.log(firstPhoneNumberExtracted);
console.log(secondPhoneNumberExtracted);