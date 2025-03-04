import { autores } from './../bancoDeDados';
import { json, Request, Response } from "express";
import Autor from "../modelos/Autor";


export default class AutorControlador {

    listar(req: Request, res: Response){
        return res.json(autores)
    };

    detalhar(req: Request, res: Response) {
        const {id} = req.params 

        const autor = autores.find((elemento) => {
            return elemento.id === id
        });

        if (!autor) {
            return res.status(404).json({
                mensagem: 'O autor não foi encontrado'
            });
        }

        return res.json(autor)
    };

   cadastrar(req: Request, res: Response) {
    const {nome, idade} = req.body

    if (!nome || !idade) {
        return res.status(400).json({
            mensagem: 'O nome e a idade do autor são obrogatórios'
        })
    }

    const autor = new Autor({
        nome,
        idade
    })

    autores.push(autor)

    return res.status(201).json({
        mensagem: 'Autor criado com sucesso ' 
    })
    };

    editar(req: Request, res: Response) {
        const {id} = req.params
        const {nome, idade} = req.body 

        if(!nome || !idade) {
            return res.send(400).json({
                mensagem: 'O nome e a idade do autor são obrigatórios'
            });
        };

        const autor = autores.find((elemento) => {
            return elemento.id === id
        });

        if(!autor) {
            return res.status(404).json({
                mensagem: 'Autor não encontrado!'
            });
        };

        autor.nome = nome;
        autor.idade = idade;

        return res.status(204).send()
    }
}