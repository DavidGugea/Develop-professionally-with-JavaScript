const _ = require("lodash");

/**
 * @type {Array} - An array of numbers from 0 to 100
 */
let array = [];

for (let i = 0; i <= 100; i++) {
    array.push(i);
}

_.each(
    array,
    (value, index) => {
        console.log(`| ${value} < -- > ${index} |`);
    }
)