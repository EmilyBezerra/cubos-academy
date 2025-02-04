import { Request, Response, NextFunction } from 'express';

export const intermediarioSair = (req: Request, res: Response, next: NextFunction) => {
    if (req.params.nome === 'sair') {
        return res.send('A requisição foi respondida no intermediário, antes de chegar no controlador');
    }
    next();
};

export const intermediarioGeral = (req: Request, res: Response, next: NextFunction) => {
    console.log('Passando no intermediário');
    next();
};
