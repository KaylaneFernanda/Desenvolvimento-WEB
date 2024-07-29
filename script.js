// Modificar a função nextStage() para exibir os estágios um por vez
function nextStage(stage) {
    // Validar se o tipo de cadastro foi selecionado antes de avançar para o próximo estágio
    if (stage === 1) {
        const tipoProfissional = document.getElementById('tipoProfissional').checked;
        const tipoCliente = document.getElementById('tipoCliente').checked;
        if (!tipoProfissional && !tipoCliente) {
            alert("Por favor, selecione o tipo de cadastro.");
            return;
        }
    }

    // Ocultar todos os estágios
    for (let i = 0; i <= 3; i++) {
        document.getElementById('stage' + i).style.display = 'none';
    }

    // Exibir apenas o estágio desejado
    document.getElementById('stage' + stage).style.display = 'block';
}

// Adicionar um evento de clique para o botão "Continuar" do estágio 0
document.getElementById('continueStage0').addEventListener('click', function() {
    nextStage(1);
});


function togglePasswordVisibility() {
    const passwordFields = document.querySelectorAll('input[type="password"]');
    passwordFields.forEach(field => {
        field.type = field.type === 'password' ? 'text' : 'password';
    });
}

function validatePassword() {
    const password = document.getElementById('senha').value;
    const confirmPassword = document.getElementById('confirmaSenha').value;
    let valid = true;

    // Validate length
    if (password.length >= 12) {
        document.getElementById('length').classList.add('valid');
        document.getElementById('length').classList.remove('invalid');
    } else {
        document.getElementById('length').classList.add('invalid');
        document.getElementById('length').classList.remove('valid');
        valid = false;
    }

    // Validate number
    const numberRegex = /\d/g;
    if ((password.match(numberRegex) || []).length >= 2) {
        document.getElementById('number').classList.add('valid');
        document.getElementById('number').classList.remove('invalid');
    } else {
        document.getElementById('number').classList.add('invalid');
        document.getElementById('number').classList.remove('valid');
        valid = false;
    }

    // Validate special character
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;
    if (specialCharRegex.test(password)) {
        document.getElementById('special').classList.add('valid');
        document.getElementById('special').classList.remove('invalid');
    } else {
        document.getElementById('special').classList.add('invalid');
        document.getElementById('special').classList.remove('valid');
        valid = false;
    }

    // Validate uppercase
    const uppercaseRegex = /[A-Z]/;
    if (uppercaseRegex.test(password)) {
        document.getElementById('uppercase').classList.add('valid');
        document.getElementById('uppercase').classList.remove('invalid');
    } else {
        document.getElementById('uppercase').classList.add('invalid');
        document.getElementById('uppercase').classList.remove('valid');
        valid = false;
    }

    // Validate lowercase
    const lowercaseRegex = /[a-z]/;
    if (lowercaseRegex.test(password)) {
        document.getElementById('lowercase').classList.add('valid');
        document.getElementById('lowercase').classList.remove('invalid');
    } else {
        document.getElementById('lowercase').classList.add('invalid');
        document.getElementById('lowercase').classList.remove('valid');
        valid = false;
    }

    // Enable/disable confirm button
    const confirmPasswordButton = document.getElementById('confirmPasswordButton');
    if (valid && password === confirmPassword) {
        confirmPasswordButton.disabled = false;
    } else {
        confirmPasswordButton.disabled = true;
    }
}

function confirmCode() {
    const emailCode = document.getElementById('emailCode').value;
    if (emailCode === "123456") { // Supondo que "123456" é o código de exemplo
        alert("Cadastro confirmado com sucesso!");
    } else {
        alert("Código de confirmação incorreto.");
    }
}

document.getElementById('continueStage1').addEventListener('click', function() {
    const tipoProfissional = document.getElementById('tipoProfissional').checked;
    const tipoCliente = document.getElementById('tipoCliente').checked;
    if (!tipoProfissional && !tipoCliente) {
        alert("Por favor, selecione o tipo de cadastro.");
        return;
    }

    // Oculta o estágio de seleção do tipo de cadastro
    document.getElementById('stage1').style.display = 'none';

    // Exibe o estágio 2 do formulário de cadastro
    document.getElementById('stage2').style.display = 'block';
});

function validateFields() {
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const cpf = document.getElementById('cpf').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!(nomeCompleto && cpf && dataNascimento && email && telefone)) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    // Verifica se o usuário tem mais de 18 anos
    const hoje = new Date();
    const dataNascimentoDate = new Date(dataNascimento);
    const idade = hoje.getFullYear() - dataNascimentoDate.getFullYear();
    const mes = hoje.getMonth() - dataNascimentoDate.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimentoDate.getDate())) {
        idade--;
    }

    if (idade < 18) {
        alert("Você deve ter mais de 18 anos para se cadastrar.");
        return false;
    }

    return true;
}
