var arrayAuto = document.querySelectorAll('img');
for (var i = 0; i < arrayAuto.length; i++) {
    arrayAuto[i].onclick = function (e) {
        var bigImage = document.getElementById('imgBig');
        bigImage.src = e.target.src.replace('small', 'big');
        bigImage.onerror = function () {
            document.querySelector('#out').innerHTML = 'Ошибка! Изображение отсутствует!';
            alert('Ошибка! Изображение отсутствует!');
        }
    }
}
