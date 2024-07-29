//-----------------------------------------------------------------------------
let pessoas = [];
//-----------------------------------------------------------------------------
function codigoExiste(codigo) {
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].codigoPessoa === codigo) {
            return true;
        }
    }
    return false;
}
//------------------------------------------------------------------------------
function compararPessoasPorCodigo(pessoa1, pessoa2) {
    if (pessoa1.codigoPessoa < pessoa2.codigoPessoa) {
        return -1;
    }
    if (pessoa1.codigoPessoa > pessoa2.codigoPessoa) {
        return 1;
    }
    return 0;
}
//-------------------------------------------------------------------------------
function adicionarPessoa() {
    let codigo = parseInt(document.getElementById('codigoPessoa').value);
    let nome = document.getElementById('nomePessoa').value;
    let telefone = document.getElementById('fonePessoa').value;

    if (!codigo || !nome || !telefone || codigo <= 0) {
        resetar();
        document.getElementById('message').innerHTML = '<span class="warning">Por favor, preencha todos os campos corretamente!</span>';
        return;
    }
    if (codigoExiste(codigo)) {
        resetar();
        document.getElementById('message').innerHTML = `<span class="warning">Cadastramento Inválido! Código <span class="highlight">${codigo}</span> já existente!</span>`;
        return;
    }
    let pessoa = {
        codigoPessoa: codigo,
        nomePessoa: nome,
        fonePessoa: telefone
    };
    pessoas.push(pessoa);
    resetar();
    document.getElementById('message').innerHTML = `Registro <span class="highlight">${codigo}</span> cadastrado com sucesso!`;
    document.getElementById('codigoPessoa').value = '';
    document.getElementById('nomePessoa').value = '';
    document.getElementById('fonePessoa').value = '';
}
//----------------------------------------------------------------------------------
function listarPessoas() {
    if (pessoas.length === 0) {
        document.getElementById('message').innerHTML = '<span class="warning">Nada para ser exibido!</span>';
        return;
    }

    pessoas.sort(compararPessoasPorCodigo);
    let listaDiv = document.getElementById('lista');
    let tableContent = '<table><thead><tr><th>Código</th><th>Nome</th><th>Telefone</th></tr></thead><tbody>';
    
    for (let i = 0; i < pessoas.length; i++) {
        tableContent += `<tr><td>${pessoas[i].codigoPessoa}</td><td>${pessoas[i].nomePessoa}</td><td>${pessoas[i].fonePessoa}</td></tr>`;
    }
    
    tableContent += '</tbody></table>';
    listaDiv.innerHTML = tableContent;
    document.getElementById('message').innerHTML = '';
}
//-------------------------------------------------------------------------------------
function resetar() {
    document.getElementById('codigoPessoa').value = '';
    document.getElementById('nomePessoa').value = '';
    document.getElementById('fonePessoa').value = '';
    document.getElementById('message').innerText = '';
    document.getElementById('lista').innerHTML = '';
}
//--------------------------------------------------------------------------------------