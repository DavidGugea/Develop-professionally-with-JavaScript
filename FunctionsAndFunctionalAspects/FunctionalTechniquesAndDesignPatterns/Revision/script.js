const test1 = async () => {
    setTimeout(
        () => {
            return 5;
        },
        2000
    )
}
const test2 = () => new Promise(
    (resolve, _) => {
        setTimeout(
            () => resolve(25),
            1000
        )
    }
);
const test3 = () => new Promise(
    (resolve, _) => {
        setTimeout(
            () => {
                console.log('second');
                resolve();
            },
            2000
        )
    }
);

(
    async () => {
        console.log("first");
        await test3();
        console.log("third");
    }
)();