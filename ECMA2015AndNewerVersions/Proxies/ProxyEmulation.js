const target = {
    "firstName" : "Max"
};

// console.dir(Object.getPrototypeOf(target)); -- > object Object with no __proto__

const proxy = Object.create(Object.getPrototypeOf(target), {});
Object.getOwnPropertyNames(target).forEach(
    function(property){
        const pd = Object.getOwnPropertyDescriptor(target, property);
        Object.defineProperty(proxy, property, {
            set: function(value){
                console.log(`Setting ${value} for the property ${property}`);
                target[property] = value;
            },
            get: function(){
                console.log(`Getting ${target[property]} for the property ${property}`);
            }
        });

        return proxy;
    }
);

proxy.firstName = "testFirstName"; // set
const firstName = proxy.firstName; // get