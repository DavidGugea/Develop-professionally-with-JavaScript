const _ = require("lodash");

const numbers = [33, 46, 76, 44, 32, 3];

_.each(numbers, function(number, index){
    console.log(number);
});