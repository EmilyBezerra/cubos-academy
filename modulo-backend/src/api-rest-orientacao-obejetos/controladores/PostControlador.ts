import { autores, posts } from './../bancoDeDados';
import { json, Request, Response } from "express";
import Autor from "../modelos/Autor";


export default class PostControlador {

    listar(req: Request, res: Response){
      return res.json(posts)
    };

    detalhar(req: Request, res: Response) {
        
    };

   cadastrar(req: Request, res: Response) {
   
    };

    editar(req: Request, res: Response) {
      
    };

    excluir(req: Request, res: Response) {
       
    };
}