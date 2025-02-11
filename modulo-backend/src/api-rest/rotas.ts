import {Router} from 'express';
import {criarIntrutuor, detalharInstrutor, listarInstrutores } from './controladores/intrutores';

const rotas = Router()

// Listar todos intrutores 
rotas.get('/instrutores', listarInstrutores);

// Detalhar as finformações de um intrutor 
rotas.get('/instrutores/:id', detalharInstrutor);

// Cadastrar instrutor 
rotas.post('/instrutores', criarIntrutuor);

// Editar um instrutor 

// Excluir um intrutor 

// Cadastrar uma aula para um instrutor 
// Excluir uma aula para um instrutor 


export default rotas;