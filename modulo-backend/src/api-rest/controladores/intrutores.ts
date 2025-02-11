import { Request, Response } from "express";

type TIntrutores = {
    id: number,
    nome: string,
    email: string;
};

const instrutores: TIntrutores[] = [ 
    {
        id: 1,
        nome:  'Guido',
        email: 'guido@email.com'
    },
    {
        id: 2,
        nome:  'Maria',
        email: 'maria@email.com'
    },
    {
        id: 3,
        nome:  'João',
        email: 'joao@email.com'
    },
];

export const listarInstrutores = (req: Request, res: Response) => {
    return res.status(200).json(instrutores)
};

export const detalharInstrutor = (req: Request, res: Response) => {
    const {id} = req.params

    const instrutor = instrutores.find((item) => {
        return item.id === Number(id)
    });

    if(!instrutor) {
        return res.status(404).json({
            mensagem: 'Instrutor não encontrado(a)'
        });
    };
    return res.status(200).json(instrutor);
};

export const criarIntrutuor = (req: Request, res: Response) => {
    const {nome, email} = req.body

    const novoInstrutor = {
        id: 4,
        nome,
        email
    }; 

    instrutores.push(novoInstrutor);

    return res.status(201).json(novoInstrutor)
};