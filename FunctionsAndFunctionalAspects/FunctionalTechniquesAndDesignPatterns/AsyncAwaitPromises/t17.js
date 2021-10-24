const fetchData = new Promise(
    (resolve, reject) => {
        const resolve_or_reject = 1;

        setTimeout(
            () => {
                if(resolve_or_reject === 1){
                    resolve("RESOLVE RESULT");
                }else if(resolve_or_reject === 2){
                    reject("REJECT RESULT");
                }
            },
            2000
        );
    }
)

const onfulfilled_callback = result => {
    console.log(`RESULT -- > ${result}`);
}

const onrejected_callback = error => {
    console.error(`ERROR -- > ${error}`);
}

fetchData
.then(
    onfulfilled_callback, onrejected_callback
);