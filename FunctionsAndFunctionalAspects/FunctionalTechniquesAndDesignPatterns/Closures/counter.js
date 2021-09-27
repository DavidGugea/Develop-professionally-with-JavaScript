function counter(name){
    let i = 0;
    return function(){
        i++;
        console.log(`${name} : ${i}`);
    }
}

const counter1 = counter("First counter");
counter1(); // First counter : 1
counter1(); // First counter : 2
counter1(); // First counter : 3
counter1(); // First counter : 4
counter1(); // First counter : 5

const counter2 = counter("Second counter");
counter2(); // Second counter : 1
counter2(); // Second counter : 2