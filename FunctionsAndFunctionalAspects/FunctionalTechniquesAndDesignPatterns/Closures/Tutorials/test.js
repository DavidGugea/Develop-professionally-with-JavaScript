/*
if(true){
    var x = 5;
}

console.log(x);
*/

function test_function(){
    let x = 5;
    if(true){
        // console.log(x);
    }

    /*
    return function inner_function(){
        console.log(x);

        let x = 5;
    }
    */

    function inner_function(){
        var a = 5;
    }

    inner_function();
    console.log(a);

    // console.log(x);
}

test_function()();
// console.log(x);