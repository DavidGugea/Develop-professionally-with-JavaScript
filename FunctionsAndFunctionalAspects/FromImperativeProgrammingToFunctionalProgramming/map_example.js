const people = [
    {
        name : "Name Example 1"
    },
    {
        name : "Name Example 2"
    },
];

/* IMPERATIVE PROGRAMMING
const names = new Array();
for(let i = 0 ; i < people.length ; i++){
    names.push(people[i].name);
}

console.log(names);
*/

const names = people.map(
    (value, index, array) => {
        return value.name;
    }
);

console.log(names);