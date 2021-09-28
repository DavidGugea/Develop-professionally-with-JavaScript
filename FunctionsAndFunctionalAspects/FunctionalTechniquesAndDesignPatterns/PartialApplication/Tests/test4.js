const add = function(...arguments){
    console.log(this);
    console.log(`this.number -- > ${this.number}`);
    return arguments.reduce(
        (accumulator, currentValue, currentIndex, array) => {
            return accumulator + currentValue;
        },
        0
    );
}

const test_object_1 = { number : 1 };
const test_object_2 = { number : 2 };
const test_object_3 = { number : 3 };
const test_object_4 = { number : 4 };
const test_object_5 = { number : 5 };

const bind_1 = add.bind(test_object_1, 1);
/*
console.dir(bind_1);
console.log("------------------------------------");
console.log(bind_1(5));
*/
const bind_2 = bind_1.bind(test_object_2, 2);
console.dir(bind_2);
console.log("------------------------------------");
console.log(bind_2(5));