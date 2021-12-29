'use strict';

class customPromise {
    constructor(executor) {
        /* 
        The promise object represents the completion or failure of a result in the future.
        The promise object can be in 1 of the following states:
        1. PENDING   -- > The promise is still waiting for the executor to resolve or reject
        2. FULFILLED -- > The promise has been resolve by the executor and the promise result is ready to be used by the onfulfilled callbacks
        3. REJECTED  -- > The promise has been rejected by the executor and the promise error is ready to be used by the failure callbacks
        */
        this.POSSIBLE_PROMISE_STATES = {};
        Object.defineProperties(
            this.POSSIBLE_PROMISE_STATES, {
                "PENDING": {
                    value: 0,
                    writable: false,
                    enumerable: true,
                    configurable: false,
                },
                "FULFILLED": {
                    value: 1,
                    writable: false,
                    enumerable: true,
                    configurable: false
                },
                "REJECTED": {
                    value: 2,
                    writable: false,
                    enumerable: true,
                }
            }
        );

        // When we create a promise before we execute the executor callback with the resolve and reject methods as callbacks, it must start in a PENDING state
        this.CURRENT_PROMISE_STATE = this.POSSIBLE_PROMISE_STATES.PENDING;

        // In this variables we will store the eventual result or error of a promise
        this.PROMISE_RESULT = null;
        this.PROMISE_ERROR = null;

        // The following arrays will store all the callbacks that wanted to be executed while the promise object was in a PENDING state but needed the promise result as their argument
        this.onfulfilled_callbacks = [];
        this.onrejected_callbacks = [];

        // Execute the executor and pass in the resolve and reject methods as its arguments
        executor(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(EXECUTOR_PROMISE_RESULT){
        // Since the promise can only have one result and that result can't change, we'll only be able to use the resolve method when the promise is in a pending state.
        if(this.CURRENT_PROMISE_STATE !== this.POSSIBLE_PROMISE_STATES.PENDING) return;

        // Change the current state of the promise to fulfilled, since the promise has received a result
        this.CURRENT_PROMISE_STATE = this.POSSIBLE_PROMISE_STATES.FULFILLED;
        // Save the result of the promise
        this.PROMISE_RESULT = EXECUTOR_PROMISE_RESULT;

        // Execute all the callbacks that have been waiting for the result of the promise in order to execute
        this.onfulfilled_callbacks.forEach(
            callback => {
                // We are going to use .then since the promise must return a promise back even if the callbacks' executions were delayed
                this.then(callback);
            }
        );
    }
    reject(EXECUTOR_PROMISE_ERROR){
        // Since the promise can only have one error and that error can't change, we'll only be able to use the reject method when the promise is in a pending state.
        if(this.CURRENT_PROMISE_STATE !== this.POSSIBLE_PROMISE_STATES.PENDING) return;

        // Change the current state of the promise to rejected, since we have received an error
        this.CURRENT_PROMISE_STATE = this.POSSIBLE_PROMISE_STATES.REJECTED;
        // Save the error of the promise
        this.PROMISE_ERROR = EXECUTOR_PROMISE_ERROR;

        // Execute all the failure callbacks that have been waiting for the error of the promise in order to execute
        this.onrejected_callbacks.forEach(
            callback => callback(this.PROMISE_ERROR)
        );
    }
    then(resolve_callback=null, reject_callback=null){
        if(resolve_callback){
            if(this.CURRENT_PROMISE_STATE === this.POSSIBLE_PROMISE_STATES.FULFILLED){
                try{
                    // We will store the result of the resolve callback in a variable and check it so that we can chain promises together
                    let resolve_result = resolve_callback(this.PROMISE_RESULT);

                    if(
                        !(resolve_result instanceof customPromise) || 
                        resolve_result === undefined
                    ){
                        console.log("RESOLVE OPTION 1");
                        // If the result of the promise is not another promise, return a resolved promise with the result
                        // If the result is undefined, return a resolve promise with the result of undefined
                        return new customPromise((resolve, reject) => resolve(resolve_result));
                    }else if(
                        resolve_result instanceof customPromise &&
                        (
                            resolve_result.CURRENT_PROMISE_STATE === this.POSSIBLE_PROMISE_STATES.PENDING   ||
                            resolve_result.CURRENT_PROMISE_STATE === this.POSSIBLE_PROMISE_STATES.FULFILLED ||
                            resolve_result.CURRENT_PROMISE_STATE === this.POSSIBLE_PROMISE_STATES.REJECTED
                        )
                    ){
                        console.log("RESOLVE OPTION 2");
                        return resolve_result;
                    }
                    /*
                    else if(resolve_result instanceof "customPromise" && resolve_result.CURRENT_PROMISE_STATE === this.POSSIBLE_PROMISE_STATES.FULFILLED){
                        // If the value returned by the resolve callback is a fulfilled promise, the promise returned by .then will be resolved with the result's promise result
                        return new customPromise((resolve, reject) => resolve(resolve_result.PROMISE_RESULT));
                    }else if(resolve_result instanceof "customPromise" && resolve_result.CURRENT_PROMISE_STATE === this.POSSIBLE_PROMISE_STATES.REJETED){
                        // If the value returned by the resolve callback is a rejected promise, the promise returned by .then will be rejected with the result's promise error
                        return new customPromise((resolve, reject) => reject(resolve_result.PROMISE_ERROR));
                    }else if(resolve_result instanceof "customPromise" && resolve_result.CURRENT_PROMISE_STATE === this.POSSIBLE_PROMISE_STATES.PENDING){
                        return resolve_result;
                    }
                    */
                }catch(promise_error){
                    console.log(promise_error);
                    // If the promise throws an error, the promise returned by .then gets rejected with the error
                    return new customPromise((resolve, reject) => reject(promise_error));
                }
            }else if(this.CURRENT_PROMISE_STATE === this.POSSIBLE_PROMISE_STATES.PENDING){
                this.onfulfilled_callbacks.push(resolve_callback);
            }
        }

        if(reject_callback){
            if(this.CURRENT_PROMISE_STATE === this.POSSIBLE_PROMISE_STATES.REJECTED){
                reject_callback(this.PROMISE_RESULT)
            }else if(this.CURRENT_PROMISE_STATE === this.POSSIBLE_PROMISE_STATES.PENDING){
                this.onrejected_callbacks.push(reject_callback);
            }
        }
    }
    catch(reject_callback){
        this.then(null, reject_callback);
    }
}

const test_executor = (resolve, reject) => {
    const resolve_or_reject = 1;

    setTimeout(
        () => {
            if(resolve_or_reject === 1){
                resolve(5);
            }else if(resolve_or_reject === 2){

            }
        },
        1000
    );
}

const test_promise = new customPromise(test_executor);
const real_promise = new Promise(test_executor);

test_promise
.then(
    (value) => {
        console.log(value);

        return 25;
    }
)
.then(
    (value) => {
        console.log(value);
    }
)