function partial(aFunction /*, parameters... */){
    const parametersBound = Array.prototype.slice.call(arguments, 1);
    return function(){
        const parametersUnbound = Array.prototype.slice.call(arguments, 0);
        return aFunction.apply(
            this,
            parametersBound.concat(parametersUnbound)
        );
    };
}

function volume(x, y, z){
    return x * y * z;
}

const volumeX5 = partial(volume, 5);
const volumeX5Y5 = partial(volume, 5, 5);

function createPerson(firstName, lastName){
    return {
        firstName : firstName,
        lastName : lastName
    }
}

const createMustermann = partial(createPerson, "Mustermann");
const max = createMustermann("Max");
console.log(max);
const moritz = createMustermann("Moritz");
console.log(moritz);