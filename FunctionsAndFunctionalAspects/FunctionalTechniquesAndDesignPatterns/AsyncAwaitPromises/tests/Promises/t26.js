const promise1 = Promise.resolve(25);
const promise2 = Promise.reject(new Error("this is a test error"));
const promise3 = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                resolve(50);
            },
            2000
        )
    }
)
const promise4 = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                reject("this is another error");
            },
            2000
        )
    }
)

/*
------------------------------------------------------------------------
>>Promise.all<<
Returns a promise that resolves into an array with all the results of the given promises.
Stops the process once a process rejects and rejects with the error of the rejected promise.
------------------------------------------------------------------------
------------------------------------------------------------------------
>>Promise.allSettled<<
Returns a promise that resolved into an array with all the outcomes of the given settlted promises.
It waits until all promises are settled ( that is either fulfilled or rejected ).

The resolved array contains objects with the results of the promise.
Each object has a >>status<< property which corresponds to the status of the promise, that is either fulfilled or rejected
If the >>status<< property is fulfilled, then the object will contain the result of the promise inside the >>value<< property.
If the >>status<< property is rejected, then the object will contain the error of the promise inside the >>reason<< property.
------------------------------------------------------------------------
------------------------------------------------------------------------
>>Promise.any<<
Returns a promise that resolves with the result of the first promise in the given array that has resolved.
If no promises resolve ( if all the promises given in the array reject ) then you will receive an AggregateError which is a subclass of Error.
The AggregateError is an object that contains an >>errors<< array property containing all the errors.
------------------------------------------------------------------------
------------------------------------------------------------------------
>>Promise.race<<
Returns a promise that resolves or rejects with the result/reason of the first settled promise of the given the array.
------------------------------------------------------------------------
*/

const promises = [promise1, promise2, promise3, promise4];
const resolving_promises = [promise1, promise3];
const rejecting_promises = [promise2, promise4];

Promise.race(promises)
    .then(
        (result) => {
            console.log(result);
        }
    )
    .catch(
        (error) => {
            console.log(error);
        }
    )