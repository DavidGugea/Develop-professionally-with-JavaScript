function aFunction(callback){
    console.log("Before callback");
    callback();
    console.log("After callback.");
}

function anotherFunction(){
    console.log("Inside callback.");
}

aFunction(anotherFunction);