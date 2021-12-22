const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");

/*
for(let entry of map){
    console.log(entry);
}
*/

for(const [key, value] of map){
    console.log(`${key} -- ${value}`);
}