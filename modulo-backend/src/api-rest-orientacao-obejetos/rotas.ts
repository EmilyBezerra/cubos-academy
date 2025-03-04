import {Router} from 'express';
import AutorControlador from './controladores/AutorControlador';
import PostControlador from './controladores/PostControlador';

const rotas = Router();

const autorControlador = new AutorControlador();
const postControlador = new PostControlador();

rotas.get('/autores', autorControlador.listar) 
rotas.get('/autores/:id', autorControlador.detalhar) 
rotas.post('/autores', autorControlador.cadastrar) 
rotas.put('/autores/:id', autorControlador.editar) 
rotas.delete('/autores/:id', autorControlador.excluir) 


rotas.get('/postagem', postControlador.listar) 
rotas.get('/postagem/:id', postControlador.detalhar) 
rotas.post('/postagem', postControlador.cadastrar) 
rotas.put('/postagem/:id', postControlador.editar) 
rotas.delete('/postagem/:id', postControlador.excluir) 

export default rotas;