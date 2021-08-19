/*
Реализовать функцию с тремя параметрами:
function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции.
В зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение
(применить switch).
*/
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

function mathOperation(a, b, operation) {
    switch (operation) {
        case '+':
            alert(summation(a, b));
            break;
        case '-':
            alert(subtraction(a, b));
            break;
        case '*':
            alert(multiplication(a, b));
            break;
        case '/':
            alert(division(a, b));
            break;
        default:
            alert('Что-то пошло не так );')
    }
}

mathOperation(4, 2, '+');
