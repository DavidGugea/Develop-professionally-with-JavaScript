const promise = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                // Change status from 'pending' to 'fulfilled'
                resolve();
            },
            2000
        );

        /*
        // Change status from 'pending' to 'rejected'
        reject();
        */
    }
);

const onFulfillment = () => {
    console.log("The function to be called when resolve was called");
}
const onRejection = () => {
    console.log("The function to be called when reject was called");
}

promise
.then(onFulfillment)
.catch(onRejection);