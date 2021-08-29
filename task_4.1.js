//var number = prompt('Введите любое число от 0 до 999: ');
//
//function numberObject(num) {
//    let array = [];
//    let digits = ['единицы: ', 'десятки: ', 'сотни: '];
//
//    if (num < 0 || num > 999) {
//        console.log('Число не соответствует условиям');
//        return;
//    }
//
//    for ( let i = 0; i < 3; i++) {
//        array.push(num % 10);
//        num = Math.floor(num / 10);
//    }
//
//    if (num >= 0 && num <= 9) {
//        return {digits[0]: array[0], digits[1]: 0, digits[2]: 0};
//    } else if (num > 9 && num <= 99) {
//        return {digits[0]: array[0], digits[1]: array[1], digits[2]: 0};
//    } else {
//        return {digits[0]: array[0], digits[1]: array[1], digits[2]: array[2]};
//    }
//}
//
//console.log(numberObject(number));

function numberObject(num) {
    if (isNaN(num)){
        message = 'Число не соответствует условиям!';
    } else if (num < 0 || num > 999){
        message = 'Число не соответствует условиям!';
    } else if (num >= 0 && num <= 9){
        message = 'еденицы: ' + num;
    } else if (num > 9 && num <= 99) {
        message = 'десятки: ' + Math.floor(num / 10 % 10) + '\n' +
                  'еденицы: ' + num % 10;
    } else {
        message = 'сотни: ' + Math.floor(num / 100 % 10) + '\n' +
                  'десятки: ' + Math.floor(num / 10 % 10) + '\n' +
                  'еденицы: ' + num % 10;
    }
    return message;
}

console.log(numberObject(456));
