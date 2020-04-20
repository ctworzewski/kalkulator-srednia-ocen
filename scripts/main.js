console.log('Działa');

let $average = document.querySelector('.average');

function suma() {
    // lista inputów, lista wpisanych ocen
    let $inputs = document.querySelectorAll('.poleOceny');
    let $showValue = document.querySelector('.showValue');

    // wyśweietlenie konkretnego inputa (wartość oceny)

    // console.log($input[0].value);
    let temp = 0;
    for (let i = 0; i < $inputs.length; i++) {
        temp = temp + Number($inputs[i].value);
        console.log(temp);

        // console.log($input[i].value);

    }

    // wyświetlenie sumy ocen
    $showValue.textContent = temp;



    /*   let suma = 0;
        $inputs.forEach((item) => {
            suma = suma + Number(item.value);
            console.log(">>" + suma);
        });
        */
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