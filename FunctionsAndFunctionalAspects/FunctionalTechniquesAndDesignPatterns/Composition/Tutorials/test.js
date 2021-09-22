const numbers = [1, 2, 3, 4, 5];
const numbers2 = [1, 2];

const add_with_2 = (value) => {
    return value + 2;
}
const multiply_by_10 = (value) => {
    return value * 10;
}

const functions_list = [
    add_with_2,
    multiply_by_10,
];

/*
const result = function_lists.reduce(
    (accumulator, current_value, current_value_index, array) => {
        return current_value(accumulator);
    }, 5
);

console.log(result);
*/

const combine_parameters = x => y => {
    return x + y;
}
//const result = combine_parameters(2)(3);

const combine_functions = functions_list => accumulator_default_value => {
    return functions_list.reduce(
        (accumulator, current_value, current_value_index, array) => {
            // the current_value is in our case the current_function that we have inside our functions_list argument
            return current_value(accumulator);
        },
        accumulator_default_value
    );
}

const combine_functions_2 = (functions_list, accumulator_default_value) => {
    return functions_list.reduce(
        (accumulator, current_value, current_value_index, array) => {
            // the current_value is in our case the current_function that we have inside our functions_list argument
            return current_value(accumulator);
        },
        accumulator_default_value
    );
}

const result = combine_functions_2(functions_list, 5);
console.log(result);