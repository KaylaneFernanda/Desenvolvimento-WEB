const notas = [3, 4, 5, 5, 6, 7, 8, 10, 5, 10];

function exibeMedia() {

    let soma = 0, media;
    for (let i = 0; i < notas.length; i++)
        soma = soma + notas[i];

    media = soma / notas.length;

    document.getElementById('result').innerHTML = `<br>Média = ${media}`;

}

function TotalizaAbaixoMedia() {

    let soma = 0, media, contador = 0;
    for (let i = 0; i < notas.length; i++)
        soma = soma + notas[i];

    media = soma / notas.length;

    for (let i = 0; i < notas.length; i++)
        if (notas[i] < media)
            contador++;


    document.getElementById('result').innerHTML = `<br>Total abaixo da média = ${contador}`;

}

function resetForm() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('valor').value = '';
}
