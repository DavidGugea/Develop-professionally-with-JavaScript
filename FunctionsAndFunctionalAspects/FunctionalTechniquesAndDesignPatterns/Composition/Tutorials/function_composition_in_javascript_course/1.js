/*
function handleTransaction(price){
    const total = price * 0.7 * 1.065 + 4.99;
    return `Your total is ${total.toFixed(2)}`;
}
*/

// BREAKING IT DOWN INTO SMALLER FUNCTION 

const applyPromotion = price => price * 0.7;
const applySalesTax = price => price * 1.065;
const applyShipping = price => price + 4.99;
const formatTotal = price => price.toFixed(2);
const createText = price => `Your total is ${price}`;

/*
NOT VERY READABLE :

const handleTransaction = (price) => createText(formatTotal(applyShipping(applySalesTax(applyPromotion(price)))));
*/

const handleTransaction = pipe(
    applyPromotion,
    applySalesTax,
    applyShipping,
    formatTotal,
    createText
);