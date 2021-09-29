(function hello(value){
    var x = 20;
    function func_test(){
        console.log(x+10);
    }
    func_test();
    console.log("hi", x);
})(40);

// console.log(x); ------- > ERROR