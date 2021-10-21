let f1 = (callback) => {
    setTimeout(
        () => {
            console.log("call 1");

            callback();
        },
        2000
    );
}

let boolean_value = false;

function time(ms){
    return new Promise((resolve, reject) => {
        if(boolean_value){
            setTimeout(resolve, ms)
        }else{
            reject(console.log("time promise rejected."));
        }
    });
}

async function test_function(){
    try{
        await time(2000);
        console.log("call 1");

        await time(0);
        console.log("call 2");

        await time(2000);
        console.log("call 3");

        await time(1000);
        console.log("call 4");
    }catch(error){
        console.log("Entered the catch statement.");
    }finally{
        console.log("This finally block will always execute.");
    }
}

test_function();

/*
let user_input_promise = () => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                console.log("user input -- > ");
            }, 3000)
        }
    );
}

async function test_function(){
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");

    await user_input_promise();

    console.log(" D ");
    console.log(" E ");
}

test_function();

/*
let order = () => {
    return new Promise(
        (resolve, reject) => {
            if(true){
                resolve();
            }else{
                reject();
            }
        }
    );
}

order()
.then()
.then()
.then()
.then()
.catch()
.finally()

async function order(){
    try{
        await abc;
    }catch(error){
        console.log("Entered the catch part of the async function.");
    }finally{
        console.log("This part will always run.");
    }
}

order()
.then(() => { 
    console.log("asdf");
});

/*
let bool_value = false;

let order = (time, work) => {
    return new Promise(
        (resolve, reject) => {
            if(bool_value){
                setTimeout(
                    () => {
                        resolve(work());
                    },
                    time
                );
            }else{
                reject(console.log("bool value is false"))
            }
        }
    );
}

order(2000, () => console.log("call 1"))
.then(() => {
    return order(0, () => console.log("call 2"));
})
.then(() => {
    return order(2000, () => console.log("call 3"));
})
.then(() => {
    return order(1000, () => console.log("call 4"));
})
.then(() => {
    return order(1000, () => console.log("call 5"));
})
.then(() => {
    return order(2000, () => console.log("call 6"));
})
.then(() => {
    return order(3000, () => console.log("call 7"));
})
.then(() => {
    return order(1000, () => console.log("call 8"))
})
.catch(() => {
    console.log("An error has occured.");
})
.finally(() => {
    console.log("This code will always execute.");
});

/*
let f2 = () => {
    setTimeout(
        () => {
            console.log("call 2");

            setTimeout(
                () => {
                    console.log("call 3");

                    setTimeout(
                        () => {
                            console.log("call 4");

                            setTimeout(
                                () => {
                                    console.log("call 5");

                                    setTimeout(
                                        () => {
                                            console.log("call 6");

                                            setTimeout(
                                                () => {
                                                    console.log("call 7");

                                                    setTimeout(
                                                        () => {
                                                            console.log("call 8");
                                                        },
                                                        2000
                                                    )
                                                },
                                                3000
                                            )
                                        },
                                        2000
                                    )
                                },
                                1000
                            )
                        },
                        1000
                    )
                },
                2000
            );
        },
        0
    );
}

f1(f2);
*/