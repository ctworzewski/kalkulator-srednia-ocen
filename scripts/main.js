console.log('Działa');

let $average = document.querySelector('.average');

function suma() {
    let $input = document.querySelectorAll('.poleOceny');
    console.log($input[0].value);
}


// ciało programu, w nie będa wywoływane poszczególne funkcje
function setup() {
    console.log('Funkcja setup');
    suma();
}


// po kliknięciu w przycisk startuje funkcja setup
$average.addEventListener('click', setup);


// referencja do li

/* 

 if (value >=1 || value <=6)  {
    oblicz srednia
}


*/