function* counter(){
    for(let i = 0 ; i < 5; i ++){
        const test = yield i;
        console.log(`test -- > ${test} || i -- > ${i}`);
    }
}

const generator = counter();
generator.next().value; // 0
generator.next().value; // 1
generator.next().value; // 2
generator.next(true).value; // 3
generator.next(true).value; // 4
generator.next(true).value; // undefined
generator.next(true).value; // undefined