const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function CustomPromise(executor){
    let state = PENDING;
    let value = null;
    let handlers = new Array();
    let catches = new Array();

    function resolve(result){
        if(state !== PENDING) return;

        state = FULFILLED;
        value =  result;

        handlers.forEach((h) => h(value));
    }

    function reject(err){
        if(state !== PENDING) return;

        state = REJECTED;
        value = err;

        catches.forEach((c) => c(err));
    }

    this.then = function(callback){
        if(state === FULFILLED){
            callback(value);
        }else{
            handlers.push(callback);
        }
    }
}