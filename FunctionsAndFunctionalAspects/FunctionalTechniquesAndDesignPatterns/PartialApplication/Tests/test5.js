const add = function(...arguments){
    console.log("this argument -- > ");
    console.log(this);
    return arguments.reduce(
        (accumulator, currentValue, currentValueIndex, array) => {
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

const add_bind_1 = add.bind(test_object_1, 1);
console.log("add_bind_1 function");
console.dir(add);
console.dir(add_bind_1);
console.log(add_bind_1(2));

console.log("--------------------------------------------------");
console.log("add_bind_2 function");

const add_bind_2 = add_bind_1.bind(test_object_2, 2);
console.dir(add_bind_2);
console.log(add_bind_2(2));

console.log("--------------------------------------------------");
console.log("add_bind_3 function")
const add_bind_3 = add_bind_2.bind(test_object_3, 3);
console.dir(add_bind_3);
console.log(add_bind_3(4));