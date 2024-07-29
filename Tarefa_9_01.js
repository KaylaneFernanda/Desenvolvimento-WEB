function exibeImpares() {
    const N1 = parseFloat(document.getElementById('N1').value);
    const N2 = parseFloat(document.getElementById('N2').value);
    const N3 = parseFloat(document.getElementById('N3').value);
    const N4 = parseFloat(document.getElementById('N4').value);
    const N5 = parseFloat(document.getElementById('N5').value);

    const meuArray = [];
    meuArray.push(N1);
    meuArray.push(N2);
    meuArray.push(N3);
    meuArray.push(N4);
    meuArray.push(N5);

    let output = '';
    for (let i = 0; i < meuArray.length; i++) {
        if (meuArray[i] % 2 == 1) {
            console.log(meuArray[i]);
            output += meuArray[i] + "<br>";
        }
        if (output == '')
            document.getElementById("result").innerHTML = "Não se digitou números ímpares!";
        else
            document.getElementById("result").innerHTML = "<br>" + output;
    }
}

function resetForm() {
    document.getElementById('N1').value = '';
    document.getElementById('N2').value = '';
    document.getElementById('N3').value = '';
    document.getElementById('N4').value = '';
    document.getElementById('N5').value = '';
    document.getElementById('result').innerHTML = '';
}
