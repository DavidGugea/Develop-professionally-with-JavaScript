const somePromise = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                resolve(2000);
            },
            2000
        )
    }
);

const test = async () => {
    try{
        const result = await somePromise;
        console.log(result);

        return Promise.resolve(25);
    }catch(error){
        console.log(error);
    }
}

(async () => await test())();