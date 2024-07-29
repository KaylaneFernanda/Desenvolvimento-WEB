function nextStage(stage) {
    const currentStage = document.getElementById('stage' + (stage - 1));
    const nextStage = document.getElementById('stage' + stage);
    currentStage.style.display = 'none';
    nextStage.style.display = 'block';
}

function validatePassword() {
    const password = document.getElementById('senha').value;
    const confirmPassword = document.getElementById('confirmaSenha').value;

    const length = password.length >= 12;
    const number = (password.match(/\d/g) || []).length >= 2;
    const special = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);

    document.getElementById('length').classList.toggle('valid', length);
    document.getElementById('length').classList.toggle('invalid', !length);
    document.getElementById('number').classList.toggle('valid', number);
    document.getElementById('number').classList.toggle('invalid', !number);
    document.getElementById('special').classList.toggle('valid', special);
    document.getElementById('special').classList.toggle('invalid', !special);
    document.getElementById('uppercase').classList.toggle('valid', uppercase);
    document.getElementById('uppercase').classList.toggle('invalid', !uppercase);
    document.getElementById('lowercase').classList.toggle('valid', lowercase);
    document.getElementById('lowercase').classList.toggle('invalid', !lowercase);

    const passwordsMatch = password === confirmPassword && password !== '' && confirmPassword !== '';
    document.getElementById('confirmPasswordButton').disabled = !passwordsMatch;
}

function togglePasswordVisibility() {
    const senhaInput = document.getElementById('senha');
    const confirmaSenhaInput = document.getElementById('confirmaSenha');

    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        confirmaSenhaInput.type = 'text';
    } else {
        senhaInput.type = 'password';
        confirmaSenhaInput.type = 'password';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('userForm');
    const message = document.getElementById('message');

    userForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(userForm);

        fetch('http://localhost:3000/addUsuario', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ocorreu um erro ao cadastrar o usuário.');
            }
            return response.text();
        })
        .then(data => {
            message.textContent = data;
            userForm.reset();
        })
        .catch(error => {
            console.error('Error:', error.message);
            message.textContent = error.message;
        });
    });
});
