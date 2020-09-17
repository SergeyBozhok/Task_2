

var CB = document.querySelectorAll('[type="checkbox"]');
var CF = document.getElementsByClassName("card course");
var U = document.forms.form;
var RO1 = U.getElementsByClassName("circ");
var RO2 = U.getElementsByClassName("but");

U.onchange = function () {
    let count = 0;
    h = document.getElementsByTagName("h1")[0];
    for (let i = 0; i <6; i++) {
        if (CB[i].checked) {
            CF[i].style.backgroundColor = '#FED230';
            RO1[i].style.backgroundColor = 'white';
            RO2[i].innerHTML = 'Пройдено!';
            RO2[i].style.borderColor = '#FED230';
            count ++;
        }
        else {
            CF[i].style.backgroundColor = 'white';
            RO1[i].style.backgroundColor = '#FED230';
            RO2[i].innerHTML = 'Пройти';
            RO2[i].style.borderColor = 'black';
        }
    }
    switch (count) {
        case 0:
            h.innerHTML = 'Ты не прошел ни одного курса';
            break;
        case 1:
            h.innerHTML = 'Ты прошел 1 курс';
            break;
        case 6:
            h.innerHTML = 'Ты прошел все курсы';
            break;
        case 5:
            h.innerHTML = 'Ты прошел 5 курсов';
            break;
        default:
            h.innerHTML = `Ты прошел ${count} курса`;
    }
}