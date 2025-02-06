import { Request, Response, NextFunction } from "express";

export function validarIdadeMaxima(req: Request, res: Response, next: NextFunction): void {
    const { idadeMaxima } = req.query;

    if (idadeMaxima && !/^\d+$/.test(idadeMaxima as string)) {
        res.status(400).json({ mensagem: "Idade máxima inválida" });
        return;
    }

    next();
}
