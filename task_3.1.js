// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
var num = 2; // т.к. 0 и 1 не являются простыми числами

while (num <= 100) {
    let check = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            check = false;
            break;
        }
    }
    if (check) console.log(num);
    num++;
}
