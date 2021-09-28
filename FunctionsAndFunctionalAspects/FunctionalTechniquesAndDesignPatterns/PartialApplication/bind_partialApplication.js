function createPerson(firstName, lastName){
    return {
        firstName : firstName,
        lastName : lastName
    }
}

const createMustermann = createPerson.bind(null, 'Mustermann');
console.dir(createMustermann);
console.log(createMustermann);
console.log("--------------------------------------------------");
const max = createMustermann("Max");
console.dir(max);
/*
console.log("--------------------------------------------------");
const moritz = createMustermann("Moritz");
console.log(moritz);
console.dir(moritz);
*/