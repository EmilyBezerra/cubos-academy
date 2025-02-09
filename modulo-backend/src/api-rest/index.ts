import express from 'express';
import 'dotenv/config';
import rotas from './rotas';

const servidor = express();

servidor.use(express.json());

servidor.use(rotas);

servidor.listen(process.env.PORT);