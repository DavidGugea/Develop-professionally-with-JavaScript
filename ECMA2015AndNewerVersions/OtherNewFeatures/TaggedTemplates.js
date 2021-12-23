const value1 = 5;
const value2 = "testValue2";

const tagFunction = (string, ...values) => {
    console.log(string);
    console.log(values);
}

const message = tagFunction`Value 1 -- > ${value1} || Value 2 -- > ${value2}`;