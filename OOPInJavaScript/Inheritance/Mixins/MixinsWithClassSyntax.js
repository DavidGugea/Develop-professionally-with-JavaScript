/*
function createClass(){
    return class {
        print(){
            console.log("Hello World");
        }
    }
}
*/
const createClass = () => class {
    print(){
        console.log("Hello World");
    }
}
class SomeSubClass extends createClass(){
    printMore(){
        console.log("Printing more");
    }
}

const Class1 = createClass();
const instance1 = new Class1();
instance1.print();

const Class2 = createClass();
const instance2 = new Class1();
instance2.print();

const instance3 = new SomeSubClass();
instance3.print();
instance3.printMore();

// MIXING PATTERN :
const Mixin = (superclass) => class extends superclass{
    // Code for the mixin
    method(){}
}