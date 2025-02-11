import { Request, Response } from "express";

type TIntrutores = {
    id: number,
    nome: string,
    email: string;
};

let proximoId = 1

const instrutores: TIntrutores[] = [ 
    {
        id: proximoId++,
        nome:  'Guido',
        email: 'guido@email.com'
    },
    {
        id: proximoId++,
        nome:  'Maria',
        email: 'maria@email.com'
    },
    {
        id: proximoId++,
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
        id: proximoId ++,
        nome,
        email
    }; 

    instrutores.push(novoInstrutor);

    return res.status(201).json(novoInstrutor);
};


export const atualizarIntrutuor = (req: Request, res: Response) => {
    const {id} = req.params
    const {nome, email} = req.body

    const instrutor = instrutores.find((item) => {
        return item.id === Number(id)
    });

    if(!instrutor) {
        return res.status(404).json({
            mensagem: 'Instrutor não encontrado(a)'
        });
    };

    instrutor.nome = nome
    instrutor.email = email
    return res.status(204);
};

export const deletarIntrutuor = (req: Request, res: Response) => {
    const {id} = req.params

    const instrutorIndex = instrutores.findIndex((item) => {
        return item.id === Number(id)
    });

    if(instrutorIndex === -1) {
        return res.status(404).json({
            mensagem: 'Instrutor não encontrado(a)'
        });
    };

    instrutores.splice(instrutorIndex, 1)
    return res.status(204);
};

export const atualizarEmail = (req: Request, res: Response) => {
    const {id} = req.params
    const {email} = req.body

    const instrutor = instrutores.find((item) => {
        return item.id === Number(id)
    });

    if(!instrutor) {
        return res.status(404).json({
            mensagem: 'Instrutor não encontrado(a)'
        });
    };

    instrutor.email = email
    return res.status(204);
};