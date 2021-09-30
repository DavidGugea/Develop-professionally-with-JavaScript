function asyncFunction(){
    let x;
    setTimeout(
        () => {
            throw new Error("Test Error");
            x = 4711;
        },
        2000
    );

    return x;
}

try{
    const result = asyncFunction();
}catch(error){
    console.error(`Error: ${error}`);
}