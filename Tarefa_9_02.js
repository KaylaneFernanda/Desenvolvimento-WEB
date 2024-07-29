function exibeInvertido() {

    const meuArray = [];

    let output = '';

    for (let i = 0; i < 10; i++) {
        meuArray.push(i + 1);
        console.log(meuArray[i]);
    }

    for (let i = 9; i >= 0; i--)  
        output += meuArray[i] + "<br>";
    
    document.getElementById("result").innerHTML = "<br>" + output;
}

function resetForm() {
    document.getElementById('result').innerHTML = '';
}
