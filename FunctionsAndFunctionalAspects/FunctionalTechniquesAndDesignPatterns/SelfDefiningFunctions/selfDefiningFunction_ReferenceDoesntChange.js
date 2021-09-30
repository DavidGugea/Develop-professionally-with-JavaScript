function firstPrintOneThenPrintTwo(){
    console.log(1);
    firstPrintOneThenPrintTwo = function(){
        console.log(2);
    }
}

const functionReference_1 = firstPrintOneThenPrintTwo;
firstPrintOneThenPrintTwo(); // 1
const functionReference_2 = firstPrintOneThenPrintTwo; 
firstPrintOneThenPrintTwo(); // 2

console.log("-----------------------");

functionReference_1(); // 1
functionReference_2(); // 2