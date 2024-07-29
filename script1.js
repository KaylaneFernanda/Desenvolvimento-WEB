let produto = [];

function codigoExiste(codigo) {
    for (let i = 0; i < produto.length; i++) {
        if (produto[i].codigoProduto === codigo) {
            return true;
        }
    }
    return false;
}

function compararProdutosPorCodigo(produto1, produto2) {
    if (produto1.codigoProduto < produto2.codigoProduto) {
        return -1;
    }
    if (produto1.codigoProduto > produto2.codigoProduto) {
        return 1;
    }
    return 0;
}

function adicionarProduto() {
    let codigo = parseInt(document.getElementById('codigoProduto').value);
    let descricao = document.getElementById('descricaoProduto').value;
    let fabricante = document.getElementById('fabricanteProduto').value;
    let quantidade = document.getElementById('quantidadeEstoque').value;

    if (!codigo || !descricao || !fabricante || !quantidade || quantidade <= 0) {
        resetar();
        document.getElementById('message').innerHTML = '<span class="warning">Por favor, preencha todos os campos corretamente!</span>';
        return;
    }
    if (codigoExiste(codigo)) {
        resetar();
        document.getElementById('message').innerHTML = `<span class="warning">Cadastramento Inválido! Código <span class="highlight">${codigo}</span> já existente!</span>`;
        return;
    }
    let novoProduto = {
        codigoProduto: codigo,
        descricaoProduto: descricao,
        fabricanteProduto: fabricante,
        quantidadeEstoque: quantidade
    };
    produto.push(novoProduto);
    resetar();
    document.getElementById('message').innerHTML = `Registro <span class="highlight">${codigo}</span> cadastrado com sucesso!`;
}

function listarProduto() {
    if (produto.length === 0) {
        document.getElementById('message').innerHTML = '<span class="warning">Nada para ser exibido!</span>';
        return;
    }

    produto.sort(compararProdutosPorCodigo);
    let listaDiv = document.getElementById('lista');
    let tableContent = '<table><thead><tr><th>Código</th><th>Descrição</th><th>Fabricante</th><th>Quantidade</th></tr></thead><tbody>';

    for (let i = 0; i < produto.length; i++) {
        tableContent += `<tr><td>${produto[i].codigoProduto}</td><td>${produto[i].descricaoProduto}</td><td>${produto[i].fabricanteProduto}</td><td>${produto[i].quantidadeEstoque}</td></tr>`;
    }

    tableContent += '</tbody></table>';
    listaDiv.innerHTML = tableContent;
    document.getElementById('message').innerHTML = '';
}

function limparProduto() {
    produto = []; // Limpa o array de produtos
    resetar(); // Limpa os campos e mensagens
    document.getElementById('message').innerHTML = '<span class="highlight">Registros apagados com sucesso!</span>';
}

function resetar() {
    document.getElementById('codigoProduto').value = '';
    document.getElementById('descricaoProduto').value = '';
    document.getElementById('fabricanteProduto').value = '';
    document.getElementById('quantidadeEstoque').value = '';
    document.getElementById('message').innerText = '';
    document.getElementById('lista').innerHTML = '';
}

// Função para deletar um produto pelo código
function deletarProduto(codigo) {
    for (let i = 0; i < produto.length; i++) {
        if (produto[i].codigoProduto === codigo) {
            produto.splice(i, 1); // Remove o produto do array
            listarProdutos(); // Atualiza a lista de produtos na tela
            document.getElementById('message').innerHTML = `<span class="highlight">Produto com código ${codigo} deletado com sucesso!</span>`;
            return;
        }
    }
    document.getElementById('message').innerHTML = `<span class="warning">Produto com código ${codigo} não encontrado!</span>`;
}

// Modificação na função listarProdutos para incluir botões de deletar
function listarProdutos() {
    if (produto.length === 0) {
        document.getElementById('message').innerHTML = '<span class="warning">Nada para ser exibido!</span>';
        return;
    }

    produto.sort(compararProdutosPorCodigo);
    let listaDiv = document.getElementById('lista');
    let tableContent = '<table><thead><tr><th>Código</th><th>Descrição</th><th>Fabricante</th><th>Quantidade</th><th>Ação</th></tr></thead><tbody>';

    for (let i = 0; i < produto.length; i++) {
        tableContent += `<tr><td>${produto[i].codigoProduto}</td><td>${produto[i].descricaoProduto}</td><td>${produto[i].fabricanteProduto}</td><td>${produto[i].quantidadeEstoque}</td><td><button onclick="deletarProduto(${produto[i].codigoProduto})">Deletar</button></td></tr>`;
    }

    tableContent += '</tbody></table>';
    listaDiv.innerHTML = tableContent;
    document.getElementById('message').innerHTML = '';
}
