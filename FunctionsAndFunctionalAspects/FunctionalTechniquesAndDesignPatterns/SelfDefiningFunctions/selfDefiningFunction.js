function firstPrintOneThenPrintTwo(){
    console.log(1);
    firstPrintOneThenPrintTwo = function(){
        console.log(2);
    }
}

firstPrintOneThenPrintTwo();
firstPrintOneThenPrintTwo();