/* Задать температуру в градусах по Цельсию. Вывести в alert соответствующую
температуру в градусах по Фаренгейту. Подсказка: расчет идет по формуле
Tf = (9 / 5) * Tc + 32,
где Tf — температура по Фаренгейту, Tc — по Цельсию. */

let Tc = prompt('Введите температуру в градусах Цельсия:');
let Tf = (9 / 5) * Tc + 32;
alert(Tc + ' градусов по Цельсию = ' + Tf + ' градусов по Фаренгейту');
