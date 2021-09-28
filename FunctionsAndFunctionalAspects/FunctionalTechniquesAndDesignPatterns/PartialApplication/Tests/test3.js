/*
var add = () => {
    console.log(this);
    console.log(this.x);
}
*/

const add = function(){
    console.log(this);
    console.log(this.x);
}

let test_object_1 = { x : 1 };

const test_function = add.bind(test_object_1);
console.dir(test_function);
test_function();