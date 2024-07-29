const arrayNotas = [7,5,2];

function exibeMenorIdade() {

   let output = '';

   let menorNota = arrayNotas[0];
    for (let i = 1; i < 3; i++) 
        if (arrayNotas[i] < menorNota)
            menorNota = arrayNotas[i];
    
    document.getElementById("result").innerHTML = "<br>" + menorNota;
}
function exibeMaiorIdade() {

    let output = '';
 
    let maiorNota = arrayNotas[0];
     for (let i = 1; i < 3; i++) 
         if (arrayNotas[i] > maiorNota)
             maiorNota = arrayNotas[i];
     
     document.getElementById("result").innerHTML = "<br>" + maiorNota;
 }

 function exibeMedia() {

    let output = '';
 
    let media, soma = 0;
     for (let i = 0; i < 3; i++) 
        soma = soma + arrayNotas[i];
     
    media = soma / 3;

     document.getElementById("result").innerHTML = "<br>" + media.toFixed(2);
 }

 function exibeNotas() {

    let output = '';
 
    for (let i = 0; i < 3; i++) 
        output = output + "&nbsp &nbsp" + arrayNotas[i];
  
     document.getElementById("result").innerHTML = "<br>" + output;
 }

function resetForm() {
    document.getElementById('result').innerHTML = '';
}
