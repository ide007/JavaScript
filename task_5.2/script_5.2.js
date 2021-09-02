const main = document.Selector('#main');

let shoppingCart = [];
let emptyCart = '<p>Ваша корзина пуста</p>'

function Item(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
}

shoppingCart.push (new Item('prod_1', 90, 3));
shoppingCart.push (new Item('prod_2', 15, 8));
shoppingCart.push (new Item('prod_3', 50, 5));
shoppingCart.push (new Item('prod_4', 33, 6));
shoppingCart.push (new Item('prod_5', 5, 20));

if (shoppingCart == 0) {
    main.insertAdjacentHTML('beforeend', `<div class="prod_item total">${emptyCart}</div>`);
} else {
	for (const iterator of shoppingCart) {
        main.insertAdjacentHTML('beforeend',
        `<div class="prod_item">
        <span>Товар - ${iterator.product}</span>
        <span>Цена товара - ${iterator.price} руб</span>
        <span>Количество - ${iterator.quantity}</span>
        <span><img src="${iterator.image}"></span>
        </div>`);
    }
}

function finalChart(shoppingCart) {
	return shoppingCart.reduce( function (acc, shoppingCart){
        return acc + shoppingCart.quantity
    }, 0)
};

function finalCost(shoppingCart) {
    return shoppingCart.reduce( function (acc, shoppingCart){
        return acc + (shoppingCart.price * shoppingCart.quantity)
    }, 0)
};

if (shoppingCart != 0) {
    const totalPrice = main.insertAdjacentHTML('beforeend',
    `<hr><div class="prod_item total">В корзине: ${finalChart(shoppingCart)} товаров на сумму
    ${finalCost(shoppingCart)} рублей</div>`);
}
