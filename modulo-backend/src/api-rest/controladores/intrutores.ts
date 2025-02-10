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
}


