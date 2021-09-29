function volume(x, y, z){
    return x * y * z;
}

function volumeCurry(x){
    return function(y){
        return function(z){
            return x * y * z;
        }
    }
}

console.log(volumeCurry(5)(5)(5));