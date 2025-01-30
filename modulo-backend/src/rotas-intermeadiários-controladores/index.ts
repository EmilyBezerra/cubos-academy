import 'dotenv/config';
import express from 'express';

const servidor = express();


servidor.get('/', (req, res) => {
    console.log(req)
    return res.send('Servidor está ok');
});

servidor.get('/usuarios', (req, res) => {
    console.log(req)
    return res.send('Servidor está ok');
});

// Inicia o servidor na porta configurada no arquivo .env
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
servidor.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});




