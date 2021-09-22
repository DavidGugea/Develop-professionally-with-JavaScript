const compositionWithContext = function(f, g){
    return function(){
        return f.call(this, g.apply(this, arguments));
    };
}

function addFour(x){
    return x + 4;
}
function multiplyWithSeven(x){
    return x * 7;
}

const addFourThenMultiplyWithSeven = compositionWithContext(
    multiplyWithSeven,
    addFour
);
const multiplyWithSevenThenAddFour = compositionWithContext(
    addFour,
    multiplyWithSeven
);