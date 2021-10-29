/*
Promise.any() takes an iterable of Promise objects. 

It returns a single promise that resolves as soon as any of the promises in the iterable fulfills, with the value of the fulfilled promise. 

If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.

This method is useful for returning the first promise that fulfills. It short-circuits after a promise fulfills, so it does not wait for the other promises to complete once it finds one
Also, unlike Promise.race(), which returns the first settled value (either fulfillment or rejection), this method returns the first fulfilled value. This method will ignore all rejected promises up until the first promise that fulfils.
*/

const promise_1 = Promise.reject(new Error("test error"));
const promise_2 = Promise.reject(new Error("second test error"));
const promise_3 = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                resolve(50);
            },
            2000
        )
    }
)

const promise_4 = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                resolve(50);
            },
            3000
        )
    }
);

const promises = [
    promise_1, promise_2 //, promise_3, promise_4
];

Promise.any(promises)
    .then(
        (result) => {
            console.log(result);
        }
    )
    .catch(
        (aggregate_error) => {
            console.log(aggregate_error);
            console.log(aggregate_error.errors);
            aggregate_error.errors.forEach(
                error => console.log(error.message)
            );
        }
    )