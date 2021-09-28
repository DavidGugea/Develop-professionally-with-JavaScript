function volume(x, y, z){
    return x * y * z;
}

function volumeFactory(){
    const parametersBound = Array.prototype.slice.call(arguments, 0);
    console.log(paramteresBound);

    return function(){
        const parametersUnbound = Array.prototype.slice.call(arguments, 0);
        console.log(parametersUnbound);
        const allParameters = parametersBound.concat(parametersUnbound);

        console.log(allParameters);
        return volume.apply(this, allParameters);
    }
}

const volumeX2X4 = volumeFactory(2, 4);
console.log(volumeX2X4(5));