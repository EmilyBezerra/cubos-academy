import 'dotenv/config';
import express from 'express';
import rotas from './rotas';

const servidor = express();

servidor.use(express.json());

servidor.use(rotas)

servidor.listen(process.env.PORT, () => {
    console.log('Servidor inicializado')
});