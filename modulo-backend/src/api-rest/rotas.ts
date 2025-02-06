import {Router} from 'express';
import { teste } from './controladores/controlador';

const rotas = Router()

rotas.get('/', teste);

export default rotas;