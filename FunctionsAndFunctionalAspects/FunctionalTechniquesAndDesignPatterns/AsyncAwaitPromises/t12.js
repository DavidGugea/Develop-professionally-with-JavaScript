const doWork = (resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 1000);
}

const doOtherWork = (resolve, reject) => {
    setTimeout(() => {
        resolve("How are you");
    }, 3000);
}

let someText = new Promise(doWork);

someText
    .then((val) => {
        console.log(`1st log : ${val}`);
        return new Promise(doOtherWork);
    })
    .then((val) => {
        console.log(val)
    });