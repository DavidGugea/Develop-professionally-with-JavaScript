let allGood = true;

// Define a Promise
// A promise can be in one of three states:
// - Pending    | hasn't settled to a value yet
// - Fulfilled  | settled successfully ( calling resolve() )
// - Rejected   | settled unsuccessfully ( calling reject() )
let fetchSomeData = new Promise(
    (resolve, reject) => {
        if(!allGood){
            reject("error fetching data.");
        }else{
            resolve({
                id : 1,
                message : "resolve message"
            });
        }
    }
);

// Consuming a Promise
fetchSomeData
.then(fetchedData => {
    console.log(`then: ${fetchedData.message}`);
})
.catch(
    err => {
        console.error(`catch: ${err}`);
    }
);