const cart = [10, 244, 2, 20, 33, 250];
finalvaluewithoutDiscount = 0;
cart.forEach(value => {
    finalvaluewithoutDiscount += value;
});

finalValue = 0;
function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result;
}

cart.forEach(value => {
    if (value > 30) {
        const discount = calculateDiscount(value, 10);
        finalvalue = finalValue = finalValue + (value - discount);
    }
    else {
        finalValue += value
    }
});

console.log(`Final value of the cart is: ${finalvaluewithoutDiscount.toFixed(2)} reais,
    porem voce teve desconto, e ira pagar apenas ${finalValue.toFixed(2)} reais,
    voce economizou ${(finalvaluewithoutDiscount - finalValue.toFixed(2)).toFixed(2)} reais!`);
;


