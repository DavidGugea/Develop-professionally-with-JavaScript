'use strict';

class customPromise{
    constructor(executor){
        this.PROMISE_STATES = {};
        Object.defineProperties(
            this.PROMISE_STATES,
            {
                "PENDING" : {
                    value : 0,
                    writable : false,
                    enumerable : true,
                    configurable : false
                },
                "FULFILLED" : {
                    value : 1,
                    writable : false,
                    enumerable : true,
                    configurable : false
                },
                "REJECTED" : {
                    value : 2,
                    writable : false,
                    enumerable : true,
                    configurable : false
                }
            }
        );
        this.CURRENT_PROMISE_STATE = this.PROMISE_STATES.PENDING;

        // The result of the promise
        this.PROMISE_RESULT = null;
        this.PROMISE_ERROR = null;

        // Callback arrays for resolve & reject
        this.fulfilled_callbacks = [];
        this.rejected_callbacks = [];

        let resolve = promise_result => {
            if(this.CURRENT_PROMISE_STATE !== this.PROMISE_STATES.PENDING) return;
            this.CURRENT_PROMISE_STATE = this.PROMISE_STATES.FULFILLED;
            this.PROMISE_RESULT = promise_result;

            this.fulfilled_callbacks.forEach(
                (callback) => {
                    callback(this.PROMISE_RESULT);
                }
            )
        }

        let reject = promise_error => {
            if(this.CURRENT_PROMISE_STATE !== this.PROMISE_RESULT.PENDING) return;
            this.CURRENT_PROMISE_STATE = this.PROMISE_STATES.REJECTED;
            this.PROMISE_ERROR = promise_error;

            this.rejected_callbacks.forEach(
                (callback) => {
                    callback(this.PROMISE_ERROR);
                }
            )
        }

        executor(resolve, reject);
    }
    then(resolve_callback, reject_callback=null){
        // Then manages all the callbacks that will need the result of the promise
        if(this.CURRENT_PROMISE_STATE === this.PROMISE_STATES.FULFILLED){
            console.log("DIRECTLY EXECUTING THE RESOLVE CALLBACK");
            // If the promise state has been fulfilled, then we will call the callback and pass in the result of the promise to it.
            resolve_callback(this.PROMISE_RESULT);
        }else if(this.CURRENT_PROMISE_STATE === this.PROMISE_STATES.PENDING){
            console.log("WAITING FOR THE RESOLVE CALLBACK");
            // If we are still waiting for the result of the promise, we'll add the callback to an array of callbacks that will execute once resolve is executed inside the executor.
            this.fulfilled_callbacks.push(resolve_callback);
        }

        if(reject_callback !== null){
            this.catch(reject_callback);
        }
    }
    catch(reject_callback){
        // Then manages all the callbacks that will be executed if the promise has stumbled across an error and couldn't get to the result of the promise.
        if(this.CURRENT_PROMISE_STATE === this.PROMISE_STATES.REJECTED){
            // If the promise couldn't get to the result and it's state has been rejected, then we'll execute the callback and pass it the promise error as an argument
            reject_callback(this.PROMISE_ERROR);
        }else if(this.CURRENT_PROMISE_STATE === this.PROMISE_STATES.PENDING){
            // If we are stil waiting for the result to happen, we'll just push the reject callback inside the array of rejected callbacks that will be executed by the >>reject<< function, passed in to the executor, inside the executor.
            this.rejected_callbacks.push(reject_callback);
        }
    }
}

// The executor does the work that will eventually lead to the result of the promise. When the executor will get to the result of the promise, it will call resolve. If the executor can't get to the result of the promise and stumbles across an error, it will call reject and give it the error of the promise. 
const test_executor = (resolve, reject) => {
    const resolve_or_reject = 1;

    setTimeout(
        () => {
            if(resolve_or_reject === 1){
                resolve("THE RESULT OF THE PROMISE.");
            }else if(resolve_or_reject === 2){
                reject("THE ERROR OF THE PROMISE");
            }
        },
        2000
    )
}

const test_promise = new customPromise(test_executor);
setTimeout(
    () => {
        test_promise
        .then(
            (promise_result) => {
                console.log("I am waiting for the promise result.");
                console.log(`The result of the promise -- > ${promise_result}`);
            },
            (promise_error) => {
                console.log(`The error of the promise -- > ${promise_error}`);
            }
        );
    },
    2000
);