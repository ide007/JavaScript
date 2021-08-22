/* С этого урока начинаем работать с функционалом интернет-магазина.
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета
стоимости корзины в зависимости от находящихся в ней товаров.

Товары в корзине хранятся в массиве. Задачи:
Организовать такой массив для хранения товаров в корзине;
Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

var shoppingCart = [
    {product: 'prod_1', price: 52, count: 3},
    {product: 'prod_2', price: 29, count: 4},
    {product: 'prod_3', price: 15.5, count: 8},
    {product: 'prod_4', price: 81, count: 1},
]

var total = 0;

function cartCalculating() {
    shoppingCart.forEach(val => console.log('Product ' + val.product +
     ' for the amount of ' + val.price * val.count));
    for (let elem of shoppingCart) {
        total += elem.price * elem.count;
    };
    console.log('Total (with for of): ' + total);

    let cartCount = shoppingCart.reduce(function(acc, cost) {
        return acc + cost.price * cost.count;
    }, 0);
    console.log('Total (with reduce): ' + cartCount);
}

cartCalculating();
