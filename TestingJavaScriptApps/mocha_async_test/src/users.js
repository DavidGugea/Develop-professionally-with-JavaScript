import fetch from 'node-fetch';

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}

(
    async () => {
        const data = await getUsers();
        console.log(data);
    }
)();

module.exports = getUsers;