/* Продолжить работу с интернет-магазином:
a) В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
объектами можно заменить их элементы?
b) Реализуйте такие объекты.
c) Перенести функционал подсчета корзины на объектно-ориентированную базу. */

function ProdItem(product, price, quantity, image, discount = 0) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.image = '../img/${image}.png';
    this.discount = discount;
    this.finalPrice = function () {
        if (discount != 0) {
            return this.price - this.price * this.discount / 100;
        } else {
            return this.price
        }
    }
    this.showCart = function () {
        return '${this.product}  количество: ${this.quantity}';
    }
}

var shoppingCart = [];

shoppingCart.push(new ProdItem('prod_1', 55, 15, 'prod_1_img', 10))
shoppingCart.push(new ProdItem('prod_2', 105, 3, 'prod_2_img'))
shoppingCart.push(new ProdItem('prod_3', 30, 35, 'prod_3_img', 1))
shoppingCart.push(new ProdItem('prod_4', 60, 6, 'prod_4_img', 25))
shoppingCart.push(new ProdItem('prod_5', 10, 20, 'prod_5_img', 5))

function orderCart(shoppingCart) {
    console.log('Ваш заказ: ')
    shoppingCart.forEach(val => {
    console.log (`${val.showChart()}.
    Цена с учетом скидки: ${val.finalPrice()}.
    Стоимость позиции: ${val.quantity * val.finalPrice()}`);
    });
}
orderCart(shoppingCart);

function finalCoast(shoppingCart) {
    return shoppingCart.reduce (function (acc, shoppingCart)) {
        return acc + (shoppingCart.finalPrice() * shoppingCart.quantity)}, 0);
}

alert(orderCart(shoppingCart));
