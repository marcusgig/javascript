const cart = [
    {productname: "Abobora", priceperKg: 5, kg: 1},
    {productname: "Pepino", priceperKg: 3.55, kg: 1.3},
    {productname: "limao", priceperKg: 1.2, kg: 2},
    {productname: "abacate", priceperKg: 5.4, kg: 1.67},
    {productname: "morango", priceperKg: 11.9, kg: 3}

]

const totalPrice = cart.reduce((acc, item) => {
    return acc + (item.priceperKg * item.kg);
}, 0);

console.log (`O preço total da compra é R$ ${totalPrice.toFixed(2)}`);

