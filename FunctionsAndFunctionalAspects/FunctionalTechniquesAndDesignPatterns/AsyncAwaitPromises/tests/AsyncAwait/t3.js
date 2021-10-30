let foo = async () => {
    const result1 = await Promise.resolve(5);
    console.log(result1);
    const result2 = await Promise.resolve(10);
    console.log(result2);

    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    resolve(500);
                },
                2000
            );
        }
    );
}

( async () => {
    const result = await foo();
    console.log(result);
})();