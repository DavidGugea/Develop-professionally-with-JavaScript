// The proxy boject enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object

// target : the original object which you want to proxy
const target = {
    message1 : "testMessage1",
    message2 : "testMessage2"
};

// handler : an object that defines which operations will be intercepted and how to redefine interecept operations;
const handler1 = {
    get: function(target, property, receiver){
        if(property === "message1"){
            return "This is a new return value for the >message1< property";
        }

        return Reflect.get(...arguments);
    }
};

const proxy1 = new Proxy(target, handler1);


console.log(proxy1.message1);
console.log(proxy1.message2);