let add = (...arguments) => {
    console.log(this);
    return arguments.reduce(
        (accumulator, currentValue, currentValueIndex, array) => (accumulator + currentValue),
        0
    )
}

let test_object_1 = { number : 1 };
let test_object_2 = { number : 2 };
let test_object_3 = { number : 3 };
let test_object_4 = { number : 4 };
let test_object_5 = { number : 5 };

let test_bind = add.bind(test_object_1, 7);
console.dir(test_bind);
console.log("------------------------------------");
console.log(test_bind());