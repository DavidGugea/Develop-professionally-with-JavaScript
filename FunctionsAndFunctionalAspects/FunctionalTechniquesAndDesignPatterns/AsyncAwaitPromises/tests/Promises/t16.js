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

        // The value that we are waiting for
        this.PROMISE_RESULT = null;
        // This variable will store an eventual error that we might get
        this.PROMISE_ERROR = null;
        
        // The callbacks that we want to execute after we get the value that we are waiting for
        this.resolve_callbacks = [];
        // The catch-callbacks that we want to execute when we get an error while trying to get the value
        this.catch_callbacks = [];

        let resolve = (executor_result) => {
            if(this.CURRENT_PROMISE_STATE !== this.PROMISE_STATES.PENDING) return; // We only want to work for the value once

            this.PROMISE_RESULT = executor_result;
            this.CURRENT_PROMISE_STATE = this.PROMISE_STATES.FULFILLED;

            this.resolve_callbacks.forEach(
                resolve_callback => {
                    resolve_callback(this.PROMISE_RESULT);
                }
            )
        }

        let reject = (executor_error) => {
            if(this.CURRENT_PROMISE_STATE !== this.PROMISE_STATES.PENDING) return;
            this.CURRENT_PROMISE_STATE = this.PROMISE_STATES.REJECTED;
            this.PROMISE_ERROR = executor_error;

            this.catch_callbacks.forEach(
                catch_callback => {
                    catch_callback(executor_error);
                }
            )
        }

        executor(resolve, reject);
    }
    then(RESOLVE_CALLBACK, REJECT_CALLBACK=null){
        console.log("Entered .then()");

        if(this.CURRENT_PROMISE_STATE === this.PROMISE_STATES.FULFILLED){
            RESOLVE_CALLBACK(this.PROMISE_RESULT);
        }else if(this.CURRENT_PROMISE_STATE === this.PROMISE_STATES.PENDING){
            this.resolve_callbacks.push(RESOLVE_CALLBACK);
        }

        if(typeof REJECT_CALLBACK === 'function'){
            if(this.CURRENT_PROMISE_STATE === this.PROMISE_STATES.REJECTED){
                REJECT_CALLBACK(this.PROMISE_ERROR);
            }else{
                this.catch_callbacks.push(REJECT_CALLBACK);
            }
        }
    }
}

const test_executor = (resolve, reject) => {
    const resolve_or_reject = 1;

    setTimeout(
        () => {
            if(resolve_or_reject === 1){
                console.log("The resolve callback has been called inside the executor");
                resolve("RESOLVE RESULT");
            }else if(resolve_or_reject == 2){
                console.log("The reject callback has been called inside the executor");
                reject("REJECT RESULT");
            }
        },
        2000
    );
}

let test_promise = new customPromise(test_executor);

test_promise
.then(
    (promise_result) => {
        console.log(`PROMISE RESULT -- > ${promise_result}`);
    },
    (promise_error) => {
        console.log(`PROMISE ERROR -- > ${promise_error}`);
    }
);