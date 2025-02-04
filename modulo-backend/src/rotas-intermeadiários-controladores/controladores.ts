import { Request, Response } from "express";

export const rotaPadrao = (req:Request, res: Response) => {
    console.log(req) 
    return res.send('Servidor está ok');
};

export const rotaUsuarios = (req: Request, res: Response) => {
    console.log(req.query) //Para pegar os paramêtros de consulta
    return res.send('Servidor está ok');
};

export const rotaUsuarioComParametro = (req: Request, res: Response) => {
    console.log(req.params.nome)
    return res.send('O servidor está ok')
};

