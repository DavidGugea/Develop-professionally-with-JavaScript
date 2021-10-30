const loadData = async () => {
    try {
        const url1 = "https://jsonplaceholder.typicode.com/todos/1";
        const url2 = "https://jsonplaceholder.typicode.com/todos/2";
        const url3 = "https://jsonplaceholder.typicode.com/todos/3";

        const results = await Promise.all(
            [
                fetch(url1),
                fetch(url2),
                fetch(url3)
            ]
        )

        const dataPromises = results.map(result => result.json())
        const finalData = await Promise.all(dataPromises);
        return finalData;
    } catch (error) {
        console.log(error);
    }
}

(async () => {
    const data = await loadData();
    console.log(data);
})();

/*
(
    async () => {
        const data = await getDataFunction();
        console.log(data);
    }
)();
*/