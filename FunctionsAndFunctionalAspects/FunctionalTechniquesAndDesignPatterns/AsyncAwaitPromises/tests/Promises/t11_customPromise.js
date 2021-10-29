const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function customPromise(executor){
    // The state of the promise. We start with pending
    let state = PENDING;

    // The value that we are waiting for. We know that eventually we'll have some kind of value or perhaps an error message
    let value = null;

    // If we want more than 1 callback to run when the work is complete, we'll store them in the handlers array.
    let handlers = [];

    // If we want more than 1 function to handle things when something goes wrong, we'll store them inside the catches array.
    let catches = [];

    function resolve(result){
        // The work is done and I have a result. This function will get called by the executor, we give this function to the >executor< function and that >executor< function will call the >result< function that's on the promise object and give it the value that it just received

        // Promises are designed to deal with one-and-done operations. It's something that's only done once and then never again. So if the promise is not pending anymore, there's nothing left to resolve.
        if(state !== PENDING) return; 

        state = FULFILLED;
        value = result;

        // Call all the handlers with the >value< as their argument
        handlers.forEach((handler_function) => {
            handler_function(value);
        });
    }

    function reject(err){
        if(state !== PENDING) return;

        state = REJECTED;
        value = err;

        catches.forEach((catches_function) => {
            catches_function(value);
        });
    }

    this.then = function(callback){
        if(state === FULFILLED){
            callback(value);
        }else{
            handlers.push(callback);
        }
    }

    executor(resolve, reject);
}

const doWork = (resolve, reject) => {
    setTimeout(
        () => {
            console.log("do work finished.");
            resolve("Hello World");
        },
        1000
    );
}

let someText = new customPromise(doWork);
/*
someText.then(
    (val) => {
        console.log(`1st log: ${val}`);
    }
);

someText.then(
    (val) => {
        console.log(`2st log: ${val}`);
    }
);

setTimeout(() => {
    someText.then(
        (val) => {
            console.log(`3st log: ${val}`);
        }
    );
}, 3000);
*/