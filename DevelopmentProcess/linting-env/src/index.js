const _ = require("lodash");

const array = [1, 2, 3, 4, 5];
_.each(
    array,
    (value, index, collection) => {
        console.log(`${value} < -- > ${index} [ From collection : ${collection}]`);
    }
)