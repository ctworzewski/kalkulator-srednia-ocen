let $btnAverage = document.querySelector('.average');

function validation($inputs) {
    $inputs.forEach(element => {
        if (element.value < 1 || element.value > 6) {
            //alert('Jebnij się w czółko');

            element.style.border = '1px solid red';
            //element.style.margin = '10px';
            element.style.width = '200px'
            element.placeholder = 'podaj ocenę!';
        } else {
            element.style.border = '1px solid green';
        }
    });
}

function suma() {
    // lista inputów, lista wpisanych ocen
    let $inputs = document.querySelectorAll('.poleOceny');
    let $showValue = document.querySelector('.showValue');
    let $displayAverage = document.querySelector('.displayAverage');
    // wyśweietlenie konkretnego inputa (wartość oceny)
    validation($inputs);

    let suma = 0;
    for (let i = 0; i < $inputs.length; i++) {
        suma = suma + Number($inputs[i].value);
    }

    /*   let suma = 0;
    $inputs.forEach((item) => {
        suma = suma + Number(item.value);
        console.log(">>" + suma);
    });
    */

    $showValue.textContent = suma;
    let average = suma / $inputs.length;
    $displayAverage.innerHTML = `<b>${average}</b>`
    return average;
}
// po kliknięciu w przycisk startuje funkcja setup
$btnAverage.addEventListener('click', suma);