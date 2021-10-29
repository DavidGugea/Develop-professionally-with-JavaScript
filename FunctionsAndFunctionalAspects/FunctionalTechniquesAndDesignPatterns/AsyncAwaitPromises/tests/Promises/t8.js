let stocks = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
};


let order = (fruit_name, call_production) => {
    setTimeout(
        () => {
            console.log(`${stocks.fruits[fruit_name]} was selected.`);

            call_production();
        },
        2000
    );
};

// Callback hell

let production = () => {
    setTimeout(
        () => {
            console.log("production has started.");

            setTimeout(
                () => {
                    console.log("The fruit has been chopped.");

                    setTimeout(
                        () => {
                            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`);

                            setTimeout(
                                () => {
                                    console.log("The machine has been started.");

                                    setTimeout(
                                        () => {
                                            console.log(`Ice cream was placed on ${stocks.holder[0]}`);

                                            setTimeout(
                                                () => {
                                                    console.log(`${stocks.toppings[0]} was added as topping.`);

                                                    setTimeout(
                                                        () => {
                                                            console.log("Server ice cream.");
                                                        },
                                                        2000
                                                    );
                                                },
                                                3000
                                            );
                                        },
                                        2000
                                    );
                                },
                                1000
                            );
                        },
                        1000
                    );
                },
                2000
            );
        },
        0
    );
}

order(0, production);