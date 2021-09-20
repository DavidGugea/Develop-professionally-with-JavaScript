function printNames(){
    console.log(arguments);

    // arguments.forEach(argument => {console.log(argument)}); wrong since arguments doesn't have a 'forEach' method
    Array.prototype.forEach.call(arguments, (argument) => {
        console.log(argument);
    });
}

printNames("a", "b");