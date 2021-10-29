fetch("https://jsonplaceholder.typicode.com/users")
.then(
    (response) => {
        console.log(response);

        return response.json();
    }
)
.then(
    (value) => {
        console.log(value);
    }
)