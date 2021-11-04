function printOneThenPrintTwo(){
    console.log(1);

    printOneThenPrintTwo = function(){
        console.log(2);
    }
}

printOneThenPrintTwo();
printOneThenPrintTwo();