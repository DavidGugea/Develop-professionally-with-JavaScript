function runThis(otherFn){
    console.log("Running...");
    otherFn();
}

runThis(() => {
    // This is the callback function
    console.log("Function 1...");
});

runThis(() => {
    // This is the callback function
    console.log("Function 2...");
});