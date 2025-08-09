const form = document.getElementById('form-numerico');

function MenorQueB(numeroA, numeroB) {
    return numeroA <= numeroB;
};

form.addEventListener('submit', function(e) {
    const valorCampoA = document.getElementById('campo-A');
    const valorCampoB = document.getElementById('campo-B');

    if(MenorQueB(valorCampoA.value, valorCampoB.value)) {
        alert('Válido');
    }else {
        alert('Inválido, o valor do campo B deve ser maior que o valor do campo A');
        e.preventDefault();
    };
});