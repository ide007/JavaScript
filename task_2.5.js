/* Реализовать четыре основные арифметические операции в виде функций с двумя
параметрами. Обязательно использовать оператор return. */

function summation(a, b) {
    return (a + b);
}

function subtraction(a, b) {
    return (a - b);
}

function multiplication(a, b) {
    return (a * b);
}

function division(a, b) {
    if (b == 0) {
        return 'Делить на нуль нельзя'
    } else {
    return (a / b).toFixed(2);
    }
}

var a = Number(prompt('Введите первое число:'));
var b = Number(prompt('Введите второе число: '));

alert('Сумма = ' + summation(a, b));
alert('Разность = ' + subtraction(a, b));
alert('Произведение = ' + multiplication(a, b));
alert('Частное = ' + division(a, b));
