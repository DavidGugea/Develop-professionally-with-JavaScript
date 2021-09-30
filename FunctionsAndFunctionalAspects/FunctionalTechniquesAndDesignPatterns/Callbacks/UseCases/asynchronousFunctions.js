function asyncFunction(){
    let x;
    setTimeout(
        () => {
            x = 4711;
            console.log(x);
        },
        2000
    );

    return x;
}

const result = asyncFunction();
console.log(result);