const profiler = {
    accesses: 0,
    get(target, name) {
        this.accesses++;
        return proxy[target];
    },
    getAccesses() {
        return this.accesses;
    }
}

const max = {
    name: "Max"
}
const person = new Proxy(max, profiler);
for(let i = 0 ; i < 9 ; i++){
    console.log(person.name);
}
console.log(profiler.getAccesses());