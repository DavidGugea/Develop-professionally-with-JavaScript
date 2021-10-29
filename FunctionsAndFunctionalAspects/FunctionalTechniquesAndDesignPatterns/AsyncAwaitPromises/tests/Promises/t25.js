/*
The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
*/

const promise_1 = Promise.resolve(25);
const promise_2 = Promise.reject("Some error");
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
                reject("Some other error");
            },
            2000
        )
    }
)

const promises = [
    promise_1, promise_2, promise_3, promise_4
];

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