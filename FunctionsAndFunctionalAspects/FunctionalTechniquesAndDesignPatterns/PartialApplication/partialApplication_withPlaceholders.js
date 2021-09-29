const _ = {}; // Placeholder
function partialWithPlaceholders(aFunction /*, parameters...*/){
    const parametersBound = Array.prototype.slice.call(arguments, 1);

    return function(){
        let i;
        let parameters = [];
        let parametersUnbound = Array.prototype.slice.call(arguments, 0);

        for(i = 0 ; i < parametersUnbound.length ; i++){
            if(parametersBound[i] !== _){
                parameters[i] = parametersBound[i];
            }else{
                parameters[i] = parametersUnbound[i];
            }
        }

        return aFunction.apply(this, parameters.concat(parametersBound));
    }
}

const volumeY5 = partialWithPlaceholders(volume, _, 5);
console.log(volumeY5(2, 2)); // 20
console.log(volumeY5(3, 3)); // 45
console.log(volumeY5(4, 4)); // 80
console.log(volumeY5(5, 5)); // 125