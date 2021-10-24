let fetchData = function(data){
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    console.log("Processing data complete");

                    resolve({
                        id : 1,
                        message : "test data"
                    });
                }, 2000);
        }
    );
}

let parseData = function(data){
    return new Promise(
        (resolve, reject) => {
            foo = bar;
            setTimeout(() => {
                let parsedOutput = `Parsed the data for id : ${data.id} with message : ${data.message}`;

                resolve({
                    parsed : parsedOutput
                });
            }, 2000);
        }
    );
}

let echoData = function(data){
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                console.log(data.parsed);
            }, 2000);
        }
    )
}

// Chaining the promises
fetchData()
.then(parseData)
.then(echoData)
.catch(err => console.error(err));