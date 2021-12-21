function createPerson(firstName, lastName){
    firstName = firstName || "defaultFirstName";
    lastName = lastName || "defaultLastName";

    return {
        firstName : firstName,
        lastName: lastName,
    }
}