import {Router} from 'express';
import {atualizarEmail, atualizarIntrutuor, criarIntrutuor, deletarIntrutuor, detalharInstrutor, listarInstrutores } from './controladores/intrutores';

const rotas = Router()

// Listar todos intrutores 
rotas.get('/instrutores', listarInstrutores);

// Detalhar as finformações de um intrutor 
rotas.get('/instrutores/:id', detalharInstrutor);

// Cadastrar instrutor 
rotas.post('/instrutores', criarIntrutuor);

// Editar um instrutor 
rotas.put('/instrutores/:id', atualizarIntrutuor);

// Excluir um intrutor 
rotas.delete('/instrutores/:id', deletarIntrutuor)

// Cadastrar uma aula para um instrutor 
rotas.patch('/instrutores/:id/alterarEmail', atualizarEmail);

// Excluir uma aula para um instrutor 


export default rotas;