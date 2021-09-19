function example(x){
    console.log(y); // undefined
    console.log(i); // undefined

    if(x){
        var y = 1234;
    }

    for(var i = 0 ; i < 4711; i++){
        // code
    }

    /*
    console.log(y);
    console.log(i);
    */
}

example(5);