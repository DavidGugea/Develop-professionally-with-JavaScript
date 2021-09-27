console.log("start");

setTimeout(() => {
    console.log('5 seconds set for this one.');
}, 5000);

console.log("between");

setTimeout(() => {
    console.log('4 seconds set for this one.');
}, 4000);

console.log("end");

/*
for(let i = 0 ; i < 3 ; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

console.log('after the loop');
*/


/*
let f;

if(true){
    let i = 1;

    f = () => {
        console.log(i);
    }
}

console.dir(f);
f();
*/

/*
let f = () => {
    let i = 1;
    let j = 2;
    return () => {
        console.log(i);
        console.log(j);
    }
}

console.dir(f());
*/