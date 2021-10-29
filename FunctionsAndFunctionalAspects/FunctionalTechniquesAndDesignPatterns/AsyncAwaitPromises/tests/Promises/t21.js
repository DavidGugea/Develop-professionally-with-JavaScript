/*
The Promise.resolve() method returns a Promise object that is resolved with a given value. 
If the value is a promise, that promise is returned; 
If the value is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable, adopting its eventual state; 
otherwise the returned promise will be fulfilled with the value. 

This function flattens nested layers of promise-like objects (e.g. a promise that resolves to a promise that resolves to something) into a single layer.

-------------------------------------------------------------------------------------------------------------------------------------------------------------

The Promise.reject() method returns a Promise object that is rejected with a given reason.
*/

const rejected_promise = Promise.reject(new Error("error message"));
rejected_promise
.catch(
    (reason) => {
        console.error(reason); // Error : error message
    }
)

/*
class test{
    constructor(){}
    then(resolve, reject){
        setTimeout(
            () => {
                resolve(25);
            },
            2000
        );
    }
}

const p_test_2 = new Promise(
    (resolve, reject) => resolve(50)
)
const p_test = new test();
const p = Promise.resolve(p_test_2);
p
.then(
    (promise_result) => {
        console.log(promise_result);
    }
)
*/