function exibeMenor() {

    const meuArray = [3,5,7,9,1];

    let output = '';

    let menorElemento = meuArray[0];

    for (let i = 1; i < 5; i++) {
       if (meuArray[i] < menorElemento)
            menorElemento = meuArray[i];
    }
    document.getElementById("result").innerHTML = "<br>" + menorElemento;
}

function resetForm() {
    document.getElementById('result').innerHTML = '';
}
