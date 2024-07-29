const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');  

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Configuração do Banco de Dados
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'teste3',
    password: '',
    port: 3306
});

app.post('/addUsuario', (req, res) => {
    const { usuarioNome, cpfCnpj, dataNasc, email, telefone, senha } = req.body;

    if (!usuarioNome || !cpfCnpj || !dataNasc || !email || !telefone || !senha) {
        return res.status(400).send('Todos os campos são obrigatórios.');
    }

    pool.query(
        'INSERT INTO usuarioProfissional (usuarioNome, cpfCnpj, dataNasc, email, telefone, senha) VALUES (?, ?, ?, ?, ?, ?)',
        [usuarioNome, cpfCnpj, dataNasc, email, telefone, senha],
        (err, results) => {
            if (err) {
                return res.status(500).send('Erro ao cadastrar o usuário.');
            }
            res.status(200).send('Usuário cadastrado com sucesso!');
        }
    );
});

app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000');
});
