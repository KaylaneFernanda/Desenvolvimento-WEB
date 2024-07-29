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
    for (let i = 0; i <= 6; i++) {
        document.getElementById('stage' + i).style.display = 'none';
    }

    // Exibir apenas o estágio desejado
    document.getElementById('stage' + stage).style.display = 'block';

    if (stage === 6) {
        console.log("Redirecionando..."); // Verificar se a função está sendo chamada corretamente
        // Mostra o elemento de carregamento
        document.getElementById('loadingStage').style.display = 'block';
        
        // Simula o redirecionamento após 3 segundos (3000 milissegundos)
        setTimeout(() => {
            alert('Você foi redirecionado para o perfil com sucesso!');
            showLoginStage(); // Para fins de demonstração, voltamos à tela de login
        }, 3000);
    }
}

function togglePasswordVisibility() {
    const passwordFields = document.querySelectorAll('input[type="password"]');
    passwordFields.forEach(field => {
        field.type = field.type === 'password' ? 'text' : 'password';
    });
}

function validatePassword() {
    const password = document.getElementById('senha').value;
    const confirmPassword = document.getElementById('confirmaSenha').value;
    const requirements = {
        length: password.length >= 12,
        number: (password.match(/\d/g) || []).length >= 2,
        special: (password.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length >= 1,
        uppercase: (password.match(/[A-Z]/g) || []).length >= 1,
        lowercase: (password.match(/[a-z]/g) || []).length >= 1
    };

    for (const key in requirements) {
        document.getElementById(key).className = requirements[key] ? 'valid' : 'invalid';
    }

    const allValid = Object.values(requirements).every(value => value);
    const passwordsMatch = password === confirmPassword;
    document.getElementById('confirmPasswordButton').disabled = !(allValid && passwordsMatch);
}

function confirmEmailCode() {
    const emailCode = document.getElementById('emailCode').value;
    // Aqui você pode adicionar a lógica para verificar o código de e-mail
    if (emailCode === '123456') { // Exemplo de código de verificação
        nextStage(4);
    } else {
        alert('Código de verificação de e-mail incorreto.');
    }
}

function confirmSMSCode() {
    const smsCode = document.getElementById('smsCode').value;
    // Aqui você pode adicionar a lógica para verificar o código SMS
    if (smsCode === '654321') { // Exemplo de código de verificação
        nextStage(5);
    } else {
        alert('Código de verificação SMS incorreto.');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um ouvinte de eventos para o clique no link "Acessar MATZZO"
    document.querySelector("a[href='']").addEventListener("click", function(event) {
        event.preventDefault(); // Evita o comportamento padrão de seguir o link

        // Mostra o elemento de carregamento
        document.getElementById('stage5').style.display = 'none'; // Esconde o conteúdo da etapa 5
        document.getElementById('stage6').style.display = 'block'; // Mostra a tela de carregamento

        // Simula o redirecionamento após 3 segundos (3000 milissegundos)
        setTimeout(() => {
            alert('Você foi redirecionado para o perfil com sucesso!');
            showLoginStage(); // Para fins de demonstração, voltamos à tela de login
        }, 3000);
    });
});
