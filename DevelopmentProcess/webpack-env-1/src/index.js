const _ = require("lodash");

const x = [1, 2, 3, 4, 5];
_.each(x, (value, index, collection) => {
    console.log(`${value} < --- > ${index} [ From : ${collection}]`);
})