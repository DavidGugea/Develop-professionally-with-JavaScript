let add = (...arguments) => {
    return arguments.reduce(
        (accumulator, currentValue, currentValueIndex, array) => {
            console.log(this);
            // console.log(this.number);
            return accumulator + currentValue;
        },
        0
    );
}

let number_1 = { number : 1 };
let number_2 = { number : 2 };
let number_3 = { number : 3 };
let number_4 = { number : 4 };
let number_5 = { number : 5 };

let test1 = add.bind(number_1, 1);
console.dir(test1);
test1();

console.log("-----------------------------------");

let test2 = test1.bind(number_2, 2);
console.dir(test2);
console.log(`Result -- > ${test2()}`);
/*
let test2 = test1.bind(number_2, 2);
let test3 = test2.bind(number_3, 3);
let test4 = test3.bind(number_4, 4);
let test5 = test4.bind(number_5, 5);

console.dir(test5);
console.log(test5());
*/