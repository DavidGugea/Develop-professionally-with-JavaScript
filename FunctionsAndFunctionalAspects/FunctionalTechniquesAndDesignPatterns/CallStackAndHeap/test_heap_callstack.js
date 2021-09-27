var num1 = 1; // allocate memory for this number
var str1 = "Hello World"; // allocate memory for this string 

// allocates memory for this object
var obj = {
    first: "John",
    last: "Dane"
}

// allocated to the function
function addOne(a){
    return a + 1;
}

function display(result){
    console.log(result);
}

// callstack
addOne();

/* Memory Heap & Call Stack
Memory heap:
- Place to store & write information
- Allocate Memory
- Release Memory
Call Stack:
- Place to keep track of where we are in the code so that we can run the code in order
- Multiple stack frames added per function invoke
*/