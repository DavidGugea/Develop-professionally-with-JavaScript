const p1 = new Promise(
    (resolve, reject) => {
        setTimeout(
            resolve,
            3000,
            "Hello"
        );
    }
);

const p2 = new Promise(
    (resolve, reject) => {
        setTimeout(
            resolve,
            2000,
            "World"
        );
    }
)

const p3 = 1000;

Promise.race([p1, p2])
.then(
    (result) => {
        console.log(result);
    }
)
.catch(
    err => {
        console.log(`Promise.all rejection -- > ${err}`);
    }
);