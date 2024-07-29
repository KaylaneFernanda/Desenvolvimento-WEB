const meuArray = [7, 5, 2, 15, 8, 34, 55, 23, 12, 99];

function checaValor() {

    let valor = parseInt(document.getElementById('valor').value);
    console.log(valor);

    for (let i = 0; i < meuArray.length; i++)
        if (meuArray[i] == valor) {
            document.getElementById("result").innerHTML = `<br> + ${valor} está presente no array!`
            break;
        }
        else {
            document.getElementById("result").innerHTML = `<br> + ${valor} NÃO está presente no array!`
            break;
        }
}

function resetForm() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('valor').value = '';
}
