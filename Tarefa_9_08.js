const arrayValores = [3, 4, 5, 5, 6, 7, 8, 10, 5, 10];

function contaPar() {

    let contadorPares=0;
    for (let i = 0; i < arrayValores.length; i++) {
        if (arrayValores[i] % 2 == 0)
            contadorPares++;
    }
    document.getElementById('result').innerHTML = `<br>Total de Pares = ${contadorPares}`;
}

function contaImpar() {

    let contadorImpares=0;
    for (let i = 0; i < arrayValores.length; i++) {
        if (arrayValores[i] % 2 == 0)
            contadorImpares++;
    }
    document.getElementById('result').innerHTML = `<br>Total de Ímpares = ${contadorImpares}`;
}

function resetForm() {
    document.getElementById('result').innerHTML = '';
  
}
