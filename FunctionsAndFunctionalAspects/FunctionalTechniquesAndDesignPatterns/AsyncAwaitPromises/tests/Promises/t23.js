/*
The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.

In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent on each other / if you'd like to immediately reject upon any of them rejecting.
*/

const promise_1 = Promise.resolve(25);
const promise_2 = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                resolve(50);
            },
            2000
        )
    }
);

const promise_3 = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                reject(new Error("error message"));
            },
            3000
        )
    }
)

const promises = [promise_1, promise_2, promise_3];

Promise.allSettled(promises)
.then(
    (results) => {
        results.forEach(
            (result) => {
                console.log(result.status);
                console.log(result.status === "fulfilled" ? result.value : result.reason);
            }
        )
    }
)