function showForgotPasswordStage() {
    document.getElementById('loginStage').style.display = 'none';
    document.getElementById('forgotPasswordStage').style.display = 'block';
}

function showLoginStage() {
    document.getElementById('forgotPasswordStage').style.display = 'none';
    document.getElementById('confirmCodeStage').style.display = 'none';
    document.getElementById('resetPasswordStage').style.display = 'none';
    document.getElementById('loginStage').style.display = 'block';
}

function sendConfirmationCode() {
    const useEmail = document.getElementById('useEmail').checked;
    const usePhone = document.getElementById('usePhone').checked;
    if (!useEmail && !usePhone) {
        alert("Por favor, selecione uma opção para receber o código de confirmação.");
        return;
    }

    const emailField = document.getElementById('forgotEmail').value;
    const phoneField = document.getElementById('forgotPhone').value;

    if (useEmail && emailField === "") {
        alert("Por favor, insira seu e-mail.");
        return;
    }
    if (usePhone && phoneField === "") {
        alert("Por favor, insira seu telefone.");
        return;
    }

    // Lógica para enviar o código de confirmação para o e-mail ou telefone
    document.getElementById('forgotPasswordStage').style.display = 'none';
    document.getElementById('confirmCodeStage').style.display = 'block';
}

function verifyConfirmationCode() {
    // Lógica para verificar o código de confirmação
    document.getElementById('confirmCodeStage').style.display = 'none';
    document.getElementById('resetPasswordStage').style.display = 'block';
}

function validatePassword() {
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmNewPassword').value;
    const length = document.getElementById('length');
    const number = document.getElementById('number');
    const special = document.getElementById('special');
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const resetButton = document.getElementById('resetPasswordButton');

    // Validações de senha
    const hasLength = password.length >= 12;
    const hasNumber = /\d.*\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const passwordsMatch = password === confirmPassword;

    length.className = hasLength ? 'valid' : 'invalid';
    number.className = hasNumber ? 'valid' : 'invalid';
    special.className = hasSpecial ? 'valid' : 'invalid';
    uppercase.className = hasUppercase ? 'valid' : 'invalid';
    lowercase.className = hasLowercase ? 'valid' : 'invalid';

    resetButton.disabled = !(hasLength && hasNumber && hasSpecial && hasUppercase && hasLowercase && passwordsMatch);
}

function toggleLoginPasswordVisibility() {
    const loginPassword = document.getElementById('loginPassword');
    const showLoginPassword = document.getElementById('showLoginPassword');

    if (showLoginPassword.checked) {
        loginPassword.type = 'text';
    } else {
        loginPassword.type = 'password';
    }
}

function togglePasswordVisibility() {
    const newPassword = document.getElementById('newPassword');
    const confirmNewPassword = document.getElementById('confirmNewPassword');
    const mostrarSenhaRedefinicao = document.getElementById('mostrarSenhaRedefinicao');

    if (mostrarSenhaRedefinicao.checked) {
        newPassword.type = 'text';
        confirmNewPassword.type = 'text';
    } else {
        newPassword.type = 'password';
        confirmNewPassword.type = 'password';
    }
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Lógica de validação do login
    // Se o login for bem-sucedido, mostrar a mensagem de redirecionamento
    document.getElementById('loginStage').style.display = 'none';
    document.getElementById('loadingStage').style.display = 'block';

    // Simular redirecionamento após alguns segundos
    setTimeout(() => {
        alert('Você foi redirecionado para o perfil com sucesso!');
        showLoginStage(); // Para fins de demonstração, voltamos à tela de login
    }, 3000);
}

document.getElementById('useEmail').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('emailInput').style.display = 'block';
        document.getElementById('phoneInput').style.display = 'none';
    }
});

document.getElementById('usePhone').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('phoneInput').style.display = 'block';
        document.getElementById('emailInput').style.display = 'none';
    }
});

function resetPassword() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;
    const resetButton = document.getElementById('resetPasswordButton');

    if (newPassword === "" || confirmNewPassword === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (newPassword !== confirmNewPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    alert("Senha redefinida com sucesso!");

    // Para fins de demonstração, voltamos à tela de login após a redefinição da senha
    showLoginStage();
}
