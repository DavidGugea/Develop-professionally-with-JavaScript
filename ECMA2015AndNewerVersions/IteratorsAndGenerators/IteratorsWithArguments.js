function* counter(){
    let counter = 0;
    while(true){
        counter++;
        const reset = yield counter;
        if(reset === true){
            counter = 0;
        }
    }
}

const counterInstance = counter();
console.log(counterInstance.next());
console.log(counterInstance.next());
console.log(counterInstance.next());
console.log(counterInstance.next());
console.log(counterInstance.next());
console.log(counterInstance.next());
console.log(counterInstance.next());
console.log(counterInstance.next(true));
console.log(counterInstance.next());
console.log(counterInstance.next());
console.log(counterInstance.next());
console.log(counterInstance.next());
console.log(counterInstance.next());
console.log(counterInstance.next());