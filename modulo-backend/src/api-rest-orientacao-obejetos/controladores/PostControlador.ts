import { autores, posts } from './../bancoDeDados';
import { json, Request, Response } from "express";
import Autor from "../modelos/Autor";
import Post from '../modelos/Post';


export default class PostControlador {

    listar(req: Request, res: Response){
      return res.json(posts)
    };

    detalhar(req: Request, res: Response) {
        const {id} = req.params

        const post = posts.find((elemento) => {
            return elemento.id === id
        });

        if (!post) {
            return res.status(404).json({
                mensagem: "A postagem não existe"
            });
        };

        return res.json(post)
    };

   cadastrar(req: Request, res: Response) {
        const {titulo, descricao, autor_id} = req.body 

        if(!titulo || !descricao || !autor_id) {
            return res.status(400).json({
                mensagem: "O título, descrição e id do autor é obrogatório"
            });
        };

        const autor = autores.find((elemento) => {
            return elemento.id === autor_id
        });
        
        if (!autor) {
            return res.status(404).json({
                mensagem: 'O autor não foi encontrado'
            });
        };

        const post = new Post({
            titulo, 
            descricao, 
            autor 
        });

        return res.status(201).json(post)
    };

    editar(req: Request, res: Response) {
      
    };

    excluir(req: Request, res: Response) {
       
    };
}