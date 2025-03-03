import {Router} from 'express';
import AutorControlador from './controladores/AutorControlador';

const rotas = Router();

const autorControlador = new AutorControlador();

rotas.get('/listarAutores', autorControlador.listar) 

export default rotas;