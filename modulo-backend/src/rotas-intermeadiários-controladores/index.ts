import { intermediarioSair, intermediarioGeral } from './intermediario';
import 'dotenv/config';
import express from 'express';
import { rotaPadrao, rotaUsuarioComParametro, rotaUsuarios } from './controladores';

const servidor = express();

servidor.use(intermediarioGeral) 

servidor.get('/', rotaPadrao);

servidor.get('/usuarios', rotaUsuarios );

servidor.get('/usuarios/:nome', intermediarioSair, rotaUsuarioComParametro);

// Inicia o servidor na porta configurada no arquivo .env
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
servidor.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});




