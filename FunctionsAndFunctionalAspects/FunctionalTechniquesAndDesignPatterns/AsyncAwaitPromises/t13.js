const executor = (resolve, reject) => {
    test_resolve_reject = 1;

    if(test_resolve_reject == 1){
        setTimeout(
            () => {
                console.log("I'm inside the executor. I'll call the resolve function");
                resolve("PASSED IN ARGUMENT FOR RESOLVE");
            },
            2000
        )
    }else if(test_resolve_reject == 2){
        console.log("I'm inside the executor. I'll call the reject function");
        reject("PASSED IN ARGUMENT FOR REJECT");
    }
}

const x = new Promise(executor);

const onfullfilled_callback = () => {
    console.log("The >>>>>ONFULLFILLED<<<<< callback for .then() has been called.");
}

const onrejected_callback = () => {
    console.log("The >>>>>ONREJECTED<<<<< callback for .then() has been called.");
}

const onrejected_callback_CATCH = () => {
    console.log("The >>>>>CATCH -- > ONREJECTED < -- CATCH<<<<< callback for .then() has been called.");
}

x
.then(
    onfullfilled_callback, onrejected_callback
).catch(
    onrejected_callback_CATCH
);
