function sum(x, y, callback){
    const result = x + y;
    if(typeof callback === 'function'){
        callback(result);
    }
}

/* 
normal anonymous function -- > 
sum(2, 2, function(result){
    console.log(`The result is ${result}`);
});
*/

// Anonymous arrow function
sum(2, 2, (result) => {
    console.log(`The result is -- > ${result}`);
});