import {Router} from 'express';
import { listarInstrutores } from './controladores/intrutores';

const rotas = Router()

// Listar todos intrutores 
rotas.get('/instrutores', listarInstrutores);


// Detalhar as finformações de um intrutor 
// Cadastrar instrutor 
// Editar um instrutor 
// Excluir um intrutor 

// Cadastrar uma aula para um instrutor 
// Excluir uma aula para um instrutor 


export default rotas;