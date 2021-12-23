const target = {
    property1 : 5,
    property2 : 10
};

const handler = {
    set(target, property, value){
        console.log(`Setting ${value} for the property ${property}`);
        target[property] = value;
    },
    get(target, property, handler){
        console.log(`Getting ${target[property]} from the property ${property}`);
    }
}

const proxy = new Proxy(target, handler);

proxy.property1 = 15; // set
const x = proxy.property1; // get